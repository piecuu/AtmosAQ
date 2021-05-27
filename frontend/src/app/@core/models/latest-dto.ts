import { CoordinateDto } from "./coordinate-dto";
import { MeasurementDto } from "./measurement-dto";

export interface LatestDto {
    location?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    coordinates?: CoordinateDto;
    measurements?: MeasurementDto[] | undefined;
}