export interface Meter {
  id: number;
  name: string;
  description?: string;
  location?: string;
  is_active: boolean;
}

export interface PowerReading {
  id: number;
  meter_name: string;
  timestamp: string;
  local_time?: string;
  voltage: number;
  current: number;
  active_power: number;
  apparent_power: number;
  reactive_power: number;
  power_factor: number;
  frequency: number;
}

export interface EnergyReading {
  id: number;
  meter_name: string;
  timestamp: string;
  import_active_energy: number;
  export_active_energy: number;
  import_reactive_energy: number;
  export_reactive_energy: number;
  power_demand: number;
  maximum_power_demand: number;
}

export interface RealtimeData {
  voltage: number;
  current: number;
  active_power: number;
  apparent_power: number;
  reactive_power: number;
  power_factor: number;
  frequency: number;
  local_time: string;
  import_active_energy?: number;
  export_active_energy?: number;
  power_demand?: number;
}

export interface TimeseriesPoint {
  timestamp: string;
  local_time?: string;
  voltage: number;
  current: number;
  active_power: number;
  power_factor: number;
  frequency?: number;
}

export interface MeterSummary {
  meter_name: string;
  last_reading?: string;
  voltage?: number;
  current?: number;
  active_power?: number;
  power_factor?: number;
  frequency?: number;
  import_active_energy?: number;
}
