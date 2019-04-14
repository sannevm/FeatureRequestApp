FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /app

# Copy solution and restore as distinct layers to cache dependencies
COPY *.csproj ./
RUN dotnet restore FeatureRequestAPI.csproj

# Publish the WebApi
COPY . ./
RUN dotnet publish FeatureRequestAPI.csproj -c Release -o out

# Build runtime image
FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=build ./app/out .
ENTRYPOINT ["dotnet", "FeatureRequestAPI.dll"]
