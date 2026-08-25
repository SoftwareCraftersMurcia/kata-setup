import Dependencies._

ThisBuild / scalaVersion     := "3.8.4"
ThisBuild / version          := "0.1.0-SNAPSHOT"
ThisBuild / organization     := "com.example"
ThisBuild / organizationName := "example"

lazy val root = (project in file("."))
  .settings(
    name := "example",
    libraryDependencies ++= Seq(
      munit, munitScalacheck
    )
  )
