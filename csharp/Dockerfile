# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS test
WORKDIR /workspace
COPY . .
RUN dotnet restore csharp.sln
CMD ["dotnet", "test", "csharp.sln", "--no-restore"]
