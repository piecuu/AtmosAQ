import { MeasurementDto } from "./measurement-dto";
import { MetaDto } from "./meta-dto";

export interface GetMeasurementsDto {
    meta?: MetaDto;
    results?: MeasurementDto[] | undefined;
}