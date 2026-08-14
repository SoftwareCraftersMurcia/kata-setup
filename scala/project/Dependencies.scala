import sbt._

object Dependencies {
  lazy val munit = "org.scalameta" %% "munit" % "1.2.0" % Test
  lazy val munitScalacheck =
    "org.scalameta" %% "munit-scalacheck" % "1.2.0" % Test
}
