import { MetaDto } from "./meta-dto";

export interface GetLatestDto {
    meta?: MetaDto;
    results?: LatestDto[] | undefined;
}