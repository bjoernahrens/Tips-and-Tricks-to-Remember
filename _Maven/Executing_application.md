---

---

# Executing the application

1. Add the following to the ```pom.xml```:  
	(Add the correct Class containing the main() method to the mainClass tag)   
	
	```XML
	<build>
		<plugins>
			<plugin>
	  			<groupId>org.codehaus.mojo</groupId>
	  			<artifactId>exec-maven-plugin</artifactId>
	  			<version>1.6.0</version><!--$NO-MVN-MAN-VER$-->
	  			<configuration>
	   				<mainClass>com.example.application.Main</mainClass>
	  			</configuration>
			</plugin>
		</plugins>
	</build>
	```

2. If the application was packaged/installed using a profile, the profile has to be used as well for execution. Otherwise it will use the default profile. Use the execution command:    
    
    ```shell
    mvn exec:java -P profileName
    ```