import { CoordinateDto } from "./coordinate-dto";
import { DateDto } from "./date-dto";

export interface MeasurementDto {
    locationId?: number;
    location?: string | undefined;
    parameter?: string | undefined;
    value?: number;
    date?: DateDto;
    lastUpdated?: Date;
    unit?: string | undefined;
    coordinates?: CoordinateDto;
    country?: string | undefined;
    city?: string | undefined;
    isMobile?: boolean;
    isAnalysis?: boolean;
    entity?: string | undefined;
    sensorType?: string | undefined;
}