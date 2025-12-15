// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { WarehouseFloorPlan } from "@/components/warehouses/warehouse-floor-plan";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { AIParticleEffect } from "@/components/ui/ai-particle-effect";
import { supabase } from "@/lib/auth/SupabaseClient";
import { toast } from "sonner";
import { Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WarehouseVisualizationPage() {
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadWarehouses();
  }, []);

  const loadWarehouses = async () => {
    try {
      const currentUser = localStorage.getItem("currentUser");
      if (!currentUser) {
        toast.error("Please sign in to view warehouses");
        return;
      }

      const userData = JSON.parse(currentUser);
      const { data, error } = await supabase
        .from("warehouses")
        .select("id, name, location")
        .eq("client_id", userData.id)
        .order("name");

      if (error) throw error;
      setWarehouses(data || []);
      
      if (data && data.length > 0 && !selectedWarehouseId) {
        setSelectedWarehouseId(data[0].id);
      }
    } catch (error: any) {
      console.error("Error loading warehouses:", error);
      toast.error(error.message || "Failed to load warehouses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AnimatedGradientBackground className="min-h-screen">
        <div className="flex items-center justify-center h-screen">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </AnimatedGradientBackground>
    );
  }

  return (
    <AnimatedGradientBackground className="min-h-screen">
      <AIParticleEffect particleColor="#3456FF" density="low" />
      <div className="container mx-auto p-2 sm:p-3 space-y-2 max-w-full min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2 flex-shrink-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-[#3456FF] to-[#8763FF] bg-clip-text text-transparent">
              Warehouse Floor Plan Visualization
            </h1>
            <p className="text-gray-500 mt-1 font-sans text-xs sm:text-sm">
              Upload floor plans and manage inventory sections with interactive grid
            </p>
          </div>
        </div>

        <Card className="flex-1 flex flex-col min-h-0 overflow-visible">
          <CardHeader className="flex-shrink-0 pb-2">
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
              <CardTitle className="text-lg">Warehouse Floor Plan</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <div className="w-full sm:w-64">
                  <Label className="text-xs">Select Warehouse</Label>
                  <Select
                    value={selectedWarehouseId}
                    onValueChange={setSelectedWarehouseId}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Select a warehouse" />
                    </SelectTrigger>
                    <SelectContent>
                      {warehouses.length === 0 ? (
                        <div className="px-2 py-1.5 text-sm text-gray-500">
                          No warehouses available
                        </div>
                      ) : (
                        warehouses.map((warehouse) => (
                          <SelectItem key={warehouse.id} value={warehouse.id}>
                            {warehouse.name} - {warehouse.location?.split(",")[0] || warehouse.location}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>
                {warehouses.length === 0 && (
                  <Button
                    onClick={() => router.push("/dashboard/warehouses")}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#3456FF] to-[#8763FF] hover:opacity-90 h-8"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Warehouse
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-2 flex-1 min-h-0">
            {selectedWarehouseId ? (
              <div className="w-full">
                <WarehouseFloorPlan warehouseId={selectedWarehouseId} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[600px] border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="text-center space-y-4 max-w-md">
                  <Upload className="w-16 h-16 mx-auto text-gray-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Upload Warehouse Floor Plan
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {warehouses.length === 0 
                        ? "Create a warehouse first, then select it to upload a floor plan image (PNG/JPG)"
                        : "Select a warehouse above to upload and manage its floor plan image (PNG/JPG)"}
                    </p>
                    {warehouses.length === 0 ? (
                      <Button
                        onClick={() => router.push("/dashboard/warehouses")}
                        className="bg-gradient-to-r from-[#3456FF] to-[#8763FF] hover:opacity-90"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Go to Warehouses Page
                      </Button>
                    ) : (
                      <p className="text-sm text-gray-400">
                        After selecting a warehouse, you'll see an "Upload Floor Plan" button to upload your image
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AnimatedGradientBackground>
  );
}
