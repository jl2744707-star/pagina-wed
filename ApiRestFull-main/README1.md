1. ¿Qué representa el sistema?

"Es un sistema de gestión de turnos médicos. Permite registrar personas, usuarios, pacientes, profesionales, especialidades, horarios, turnos y atenciones."

2. Explicar las tablas principales
Persona

Es la tabla base donde se guardan los datos personales:

DNI
Nombre
Apellido
Teléfono
Email
Usuario

Permite iniciar sesión en el sistema.

Relación:

Persona 1 ----- 1 Usuario

Una persona tiene un usuario y un usuario pertenece a una persona.

Rol

Define roles:

Administrador
Profesional
Paciente

Relación:

Rol 1 ----- N Usuario

Un rol puede tener muchos usuarios.

3. Explicar Paciente y Profesional

Tanto paciente como profesional derivan de una persona.

Persona 1 ----- 1 Paciente

Persona 1 ----- 1 Profesional

Porque primero existe la persona y después se define si esa persona es paciente o profesional.

4. Explicar Especialidad
Especialidad 1 ----- N Profesional

Ejemplo:

Cardiología:

Dr. Pérez
Dra. Gómez
Dr. López

Todos pertenecen a la misma especialidad.

5. Explicar Horarios
Profesional 1 ----- N Horario

Un profesional puede atender:

Lunes 08:00-12:00
Miércoles 14:00-18:00
Viernes 08:00-12:00

Por eso tiene varios horarios.

6. Explicar Turnos

Un turno necesita:

Paciente
Profesional
Horario
Sala

Por eso:

Paciente     1 ----- N Turno
Profesional  1 ----- N Turno
Horario      1 ----- N Turno
Sala         1 ----- N Turno
7. Explicar Atención

La atención es la consulta médica realizada.

Turno 1 ----- 1 Atención

Porque un turno genera una atención.

La atención guarda:

Fecha
Observaciones
Diagnóstico
Indicaciones
8. Mostrar lo que ya funciona

Podés decir:

"Implementé y probé completamente las tablas Rol, Persona y Usuario. También configuré las relaciones en Sequelize y verifiqué que funcionan mediante consultas con include."

Y mostrar el resultado que te devolvió:

{
  "usuario": "juanperez",
  "Persona": {
    "nombre": "Juan",
    "apellido": "Perez"
  },
  "Rol": {
    "nombre_rol": "Administrador"
  }
}

Esto es una excelente demostración porque prueba que las relaciones realmente están funcionando.

Si te preguntan por qué elegiste Sequelize, una respuesta sencilla es:

"Utilicé Sequelize porque es un ORM para Node.js que permite representar las tablas como modelos JavaScript y definir relaciones entre ellas sin escribir consultas SQL complejas manualmente."

Un ORM permite trabajar con la base de datos usando JavaScript en lugar de escribir SQL todo el tiempo.

sequelize hace la administracion completa de la base de datos


Ejemplos:

Rol: 

{
    "nombre_rol": "Administrador"
}

personas: 

{
    "dni": "45123456",
    "apellido": "Perez",
    "nombre": "Juan",
    "telefono": "3875123456",
    "fecha_nacimiento": "2000-05-10",
    "email": "juan@gmail.com",
    "sexo": "Masculino",
    "direccion": "Aguaray"
}

usuarios: 

{
    "id_persona": 1,
    "usuario": "juanperez",
    "contraseña": "123456",
    "id_rol": 1
}

Fetch es una función de JavaScript que permite enviar solicitudes HTTP a un servidor. En nuestro proyecto la usamos para comunicar el frontend con la API REST. Cuando el usuario completa el formulario, fetch envía los datos mediante un método POST a la API, la API los procesa con Express y Sequelize y finalmente los guarda en PostgreSQL

Con fetch() el HTML puede enviar y recibir información de la API.

fetch() es una función de JavaScript que sirve para comunicarse con un servidor.