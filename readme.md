

#Instalar Node.js y Redis en mi máquina

#github y visual Studio Code Control de versiones
1-  CReamos cuenta en github. Bajo git para windows https://git-scm.com/download/win y lo instalo. Compruebo que está instalado  con git -version. 
En visual estudio code buscamosgit clone y pegamos el code copiado de github
https://github.com/slarrode/estudio.git
2-Genero un makefile , un readme.md y main.js.
 Documentaremos lo que hacemos con REdis, node.js. También he instalado Docker
3-Instalo en visual docker,makefile tools y markdown all in one y markdownlint.
***Me da error de usuario y correo cuando voy a guardar y ejecuto en el terminal git config --global user.name "slarrode"  y git config --global user.email "slarrode@gmail.com" y ya funciona perfecto.***
4-Creo el makefile, añado contenido y lo actualizo para subirlo a github
5-Genero el archivo main.js que ejecutará un hola mundo
Para ejecutar el programa abro un terminal y escribo make para ejecutarlo
***me da error al ejecutar make e instalo desde cygwin 
https://www.gnu.org/software/make/#download  *** Modifico en visual el archivo settings.json y añando el path  Lo añado a las variables de entorno
añado al json-- {"terminal.integrated.env.windows": {
    "PATH": "C:\\cygwin64\\bin;${env:PATH}"
}
,"terminal.external.windowsExec": "C:\\WINDOWS\\System32\\cmd.exe",
}
 
 *** Problemas con make make --version   $env:path notepad profile   get-Alias make 
make hello
makefile:4: *** missing separator.  Stop.
PS C:\Users\Silvia\estudio\estudio>  Serios problemas hasta solucionarlo, entre otros los espacios en makefile,debían ser tabuladores y en algún caso se había colado algún espacio.
***PS C:\Users\Silvia\estudio\estudio> make
Hola mundo***  SE EJECUTA CORRECTAMENTE
***
#Node.js
1-Descargamos el instalador desde elo sitio oficial Node.js Downloads y ejecutamos el instalador.Instalamos todas lsa tools que indica, Errores de instalación

[dOCUMENTACIÓN DE REDIS](https://github.com/redis/redis)
1-Descargamos el instalador de Redis para Windows desde https://github.com/microsoftarchive/redis/releases
Puerto 6379
--> descomprimimos el archivo y lo descargamos en un directorio y configuramos el servicio Redis.
--> configuración del servicio: Buscamos el archivo redis.windows-service.conf y lo renombramos a redis.conf. Ejecuto redis-server.exe para iniciar el servidor redis en mi máquina.
Instalando: VirtualMachinePlatform

Herramienta Administración y mantenimiento de imágenes de implementación
Versión: 10.0.19041.3636

Versión de imagen: 10.0.19045.3693

Habilitando características
[==========================100.0%==========================]
La operación se completó correctamente.
La operación solicitada se realizó correctamente. Los cambios se aplicarán una vez que se reinicie el sistema.
Presiona cualquier tecla para salir...

Ejecuto redis-cli.exe y pruebo a hacer ping
127.0.0.1:6379> ping
PONG
127.0.0.1:6379>

2- VAmos a conectar Redis desde mi aplicación node.js y para ello usaré un cliente Redis, en mi cso el paquete redis que instalaré a través de npm. 
Hola mundo
PS C:\Users\Silvia\estudio\estudio> npm install redis

added 10 packages in 6s
npm notice
npm notice New minor version of npm available! 10.1.0 -> 10.2.3
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.3
npm notice Run npm install -g npm@10.2.3 to update!
npm notice
3- Para usar elcliente Redis en mi aplicación, modifico main.js para facilitar la conexión con Redis
PS C:\Users\Silvia\estudio\estudio> node main.js
Hola, mundo!

De este modo ejecuta nuestro programa y la conexión a Redis fue exitosa

Por último actualizo mis cambios en Visual Studio Code y compruebo que está OK en Github.

DOCKER: Ya hemos instalado previmente docker desde https://www.docker.com/products/docker-desktop/
1- Creo los archivos dockerfile y docker-compose
2- Error WSL command: Me aseguro que el docker desktop launcher se ejecuta al inicio de windows. lo habilito al inicio. 
PS C:\Users\Silvia\estudio\estudio> docker-compose up
request returned Internal Server Error for API route and version http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/containers/json?all=1&filters=%7B%22label%22%3A%7B%22com.docker.compose.config-hash%22%3Atrue%2C%22com.docker.compose.project%3Destudio%22%3Atrue%7D%7D, check if the server supports the requested API version
PS C:\Users\Silvia\estudio\estudio> 

problema con la comunicación entre Docker Compose y el demonio de Docker.-->Reinstalo, reinicio servicio, reviso que está ejecutado al inicio -> Vuelvo a hacer docker-compose up y ocurre lo mismo 

Voy a docker desktop Configuración > Recursos > WSL Integration y me aseguro  de que mi distribución de WSL esté seleccionada.  C:\Users\Silvia\AppData\Local\Docker\wsl. Le doy permiso en el firewall, compruebo la versión con docker version. parece estar todo ok. Modifico nuevamente el archivo Dockerfile y ya me permite construir el docker-compose up exitosamente.
PS C:\Users\Silvia\estudio\estudio> docker-compose up para construir e iniciar los contenedores.Esto construirá la imagen según el Dockerfile y ejecutará tus contenedores. Le cuesta muchísimo.

[+] Building 0.0s (0/0)                                                                                                            docker:default
[+] Building 51.9s (4/9)                                                                                                                                               docker:default                     docker:defaultd build definition from Dockerfile                                                                                                            1.9s
 => [nodejs-redis-app internal] load build definition from Dockerfile 

3-Docker-compose iniciará un contenedor Redis junto con la aplicación node.js
4-Con los contenedores en funcionamiento, la aplicación Node.js  está disponible en http://localhost:3000. 
5-Instalo PS C:\Users\Silvia\estudio\estudio> npm install express

added 62 packages, and audited 73 packages in 10s
6-PS C:\Users\Silvia\estudio\estudio> node main.js
Hola, mundo!
6-Añado la ruta de REdis a variables de entorno