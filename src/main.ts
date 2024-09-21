import "./style.css";

const commonPasswords: string[] = [
  "password",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const tieneMayusculas = clave !== clave.toLowerCase();
  const tieneMinusculas = clave !== clave.toUpperCase();

  if (tieneMayusculas && tieneMinusculas) {
    return {
      esValida: true,
    };
  }

  return {
    esValida: false,
    error: "La clave debe de tener mayúsculas y minúsculas",
  };
};

const tieneNumeros = (clave: string): ValidacionClave => {
  const tieneNumeros = /\d/.test(clave);

  if (tieneNumeros) {
    return {
      esValida: true,
    };
  }

  return {
    esValida: false,
    error: "La clave debe de tener números",
  };
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const tieneCaracteresEspeciales =
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(clave);

  if (tieneCaracteresEspeciales) {
    return {
      esValida: true,
    };
  }

  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  };
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    return {
      esValida: true,
    };
  }

  return {
    esValida: false,
    error: "La clave debe de tener una longitud mínima de 8 caracteres",
  };
};

const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave.includes(nombreUsuario)) {
    return {
      esValida: true,
    };
  }

  return {
    esValida: false,
    error: "La clave no debe tener el nombre del usuario",
  };
};

const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!commonPasswords.includes(clave)) {
    return {
      esValida: true,
    };
  }

  return {
    esValida: false,
    error: "La clave no debe de contener palabras comunes",
  };
};

const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones: ValidacionClave[] = [
    tienePalabrasComunes(clave, commonPasswords),
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
  ];

  const validacionConErrores = validaciones.find(
    (validacion) => validacion.esValida === false
  );

  if (validacionConErrores) {
    console.error(validacionConErrores.error);
    return validacionConErrores;
  }

  console.log("La clave es válida");
  return {
    esValida: true,
  };
};

validarClave("admin", "superman", commonPasswords);
