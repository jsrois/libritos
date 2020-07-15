import com.moowork.gradle.node.yarn.YarnTask
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.3.1.RELEASE"
	id("io.spring.dependency-management") version "1.0.9.RELEASE"
	id("com.github.node-gradle.node") version "2.2.2"
	kotlin("jvm") version "1.3.72"
	kotlin("plugin.spring") version "1.3.72"
}

group = "net.jsrois"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	testImplementation("org.springframework.boot:spring-boot-starter-test") {
		exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
	}
	testImplementation("org.seleniumhq.selenium:selenium-java")
	testImplementation("org.seleniumhq.selenium:selenium-support")
	testImplementation("io.github.bonigarcia:webdrivermanager:4.0.0")
}

tasks.register<YarnTask>("webClientInstallDependencies") {
	description = "Installs all dependencies from package.json"
	workingDir = file("${project.projectDir}/web-client")
	args = listOf("install")
}

tasks.register<YarnTask>("webClientTest") {
	dependsOn("webClientInstallDependencies")
	description = "runs the frontend tests"
	workingDir = file("${project.projectDir}/web-client")
	args = listOf("test")
}

tasks.register<YarnTask>("webClientBuild") {
	dependsOn("webClientTest")
	description = "builds the frontend bundle"
	workingDir = file("${project.projectDir}/web-client")
	args = listOf("webpack")
}

tasks.register<Copy>("webClientCopy") {
	dependsOn("webClientBuild")
	description = "copies the frontend bundle into the resources folder"
	from("${project.projectDir}/web-client/build")
	into("${project.projectDir}/src/main/resources/static/.")
}

tasks.withType<Test> {
	useJUnitPlatform()
}


tasks.withType<KotlinCompile> {
	dependsOn("webClientCopy")
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}
