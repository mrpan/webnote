#spring boot learning log

debug
you can also specify debug=true in your application.properties.
##Logging properties

logging.file= my.log   
logging.path=/var/log

#Log Levels

logging.level.root=WARN
logging.level.org.springframework.web=DEBUG
logging.level.org.hibernate=ERROR

#CORS support

endpoints.cors.allowed-origins=http://example.com
endpoints.cors.allowed-methods=GET,POST

#Customizing the management server port

management.port=8081
management.security.enabled=false

#Configuring management-specific SSL

server.port=8443
server.ssl.enabled=true
server.ssl.key-store=classpath:store.jks
server.ssl.key-password=secret
management.port=8080
management.ssl.enabled=false

#Customizing the management server address
management.port=8081
management.address=127.0.0.1