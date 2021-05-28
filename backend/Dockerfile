FROM mcr.microsoft.com/dotnet/sdk:5.0 AS publish

WORKDIR /src

EXPOSE 80

EXPOSE 443

COPY . .

RUN dotnet restore

RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0

WORKDIR /app

COPY --from=publish /app/ .

ENTRYPOINT ["dotnet", "AtmosAQ.Web.dll"]