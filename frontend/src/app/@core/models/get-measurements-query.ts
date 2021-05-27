export interface GetMeasurementsQuery {
    dateFrom: string,
    dateTo: string,
    city: string,
    resultLimit: number,
    sortBy: string
}