
[estoy estudiando esto](https://www.php.net/)
#Instalar Node.js y Redis en mi máquina

#github
1-  CReamos cuenta en github. Bajo git para windows https://git-scm.com/download/win y lo instalo. Compruebo que está instalado  con git -version. 
En visual estudio code buscamosgit clone y pegamos el code copiado de github
https://github.com/slarrode/estudio.git
2-Genero un makefile , un readme.md y main.js.
 Documentaremos lo que hacemos con REdis, node.js y docker desktop
3-Instalo en visual docker,makefile tools y markdown all in one y markdownlint.
***Me da error de usuario y correo cuando voy a guardar y ejecuto en el terminal git config --global user.name "slarrode"  y git config --global user.email "slarrode@gmail.com" y ya funciona perfecto.***
4-Creo el makefile, añado contenido y lo actualizo para subirlo a github
5-Genero el archivo main.js que ejecutará un hola mundo
Para ejecutar el programa abro un terminal y escribo make para ejecutarlo
***me da error al ejecutar make e instalo desde cygwin 
https://www.gnu.org/software/make/#download  *** Modifico en visual el arcjivo settings.json y añando el path  Lo añado a las variables de entorno
añado al json-- {"terminal.integrated.env.windows": {
    "PATH": "C:\\cygwin64\\bin;${env:PATH}"
}
,"terminal.external.windowsExec": "C:\\WINDOWS\\System32\\cmd.exe",
}
 
 *** Problemas con make make --version   $env:path notepad profile   get-Alias make 
make hello
makefile:4: *** missing separator.  Stop.
PS C:\Users\Silvia\estudio\estudio> ***
#Node.js
1-Descargamos el instalador desde elo sitio oficial Node.js Downloads y ejecutamos el instalador.Instalamos todas lsa tools que indica, Errores de instalación



[dOCUMENTACIÓN DE REDIS](https://github.com/redis/redis)
2-Descargamos el instalador de Redis para Windows desde Redis Downloads
--> descomprimimos el archivo y lo descargamos en un directorio y configuramos el servicio Redis.
--> configuración del servicio: Buscamos el archivo redis.windows-service.conf y lo renombramos a redis.conf
