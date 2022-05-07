import sbt._

object Dependencies {
  lazy val munit = "org.scalameta" %% "munit" % "0.7.29" % Test
  lazy val munitScalacheck =
    "org.scalameta" %% "munit-scalacheck" % "0.7.29" % Test
}
