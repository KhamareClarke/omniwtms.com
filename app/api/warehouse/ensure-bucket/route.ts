import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: 'Supabase credentials not configured' },
        { status: 500 }
      );
    }

    // Create admin client with service role key
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    const bucketName = 'warehouse-assets';

    // Check if bucket exists
    const { data: buckets, error: listError } = await supabaseAdmin.storage.listBuckets();
    
    if (listError) {
      console.error('Error listing buckets:', listError);
      return NextResponse.json(
        { error: 'Failed to check buckets', details: listError.message },
        { status: 500 }
      );
    }

    const bucketExists = buckets?.some(bucket => bucket.name === bucketName);

    if (bucketExists) {
      return NextResponse.json({
        success: true,
        message: 'Bucket already exists',
        bucket: bucketName
      });
    }

    // Create the bucket
    const { data: newBucket, error: createError } = await supabaseAdmin.storage.createBucket(bucketName, {
      public: true, // Make it public so images can be accessed
      fileSizeLimit: 52428800, // 50MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg']
    });

    if (createError) {
      console.error('Error creating bucket:', createError);
      return NextResponse.json(
        { error: 'Failed to create bucket', details: createError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Bucket created successfully',
      bucket: newBucket
    });
  } catch (error: any) {
    console.error('Error in ensure-bucket route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}


