export class UserRegister {
  constructor(name, email, password, adminCode) {
    // Validação dos campos
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("O nome deve ser uma string não vazia.");
    }
    if (typeof email !== "string" || !this.#isValidEmail(email)) {
      throw new Error(
        "O e-mail deve ser uma string válida. \nExemplo: teste@teste.com"
      );
    }
    if (typeof password !== "string" || password.trim() === "") {
      throw new Error("A senha deve ser uma string não vazia.");
    }
    if (password.length < 6) {
      throw new Error("A senha deve ter no mínimo 6 carcteres.");
    }
    if (typeof adminCode !== "string" || adminCode.trim() === "") {
      throw new Error(
        "O código de administrador deve ser uma string não vazia."
      );
    }

    // Atribuição dos valores aos atributos
    this.name = name;
    this.email = email;
    this.password = password;
    this.adminCode = adminCode;
  }

  // Função para validar o e-mail
  #isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export class UserLogin {
  constructor(email, password) {
    // Validação dos campos
    if (typeof email !== "string" || !this.#isValidEmail(email)) {
      throw new Error(
        "O e-mail deve ser uma string válida. \nExemplo: teste@teste.com"
      );
    }
    if (typeof password !== "string" || password.trim() === "") {
      throw new Error("A senha deve ser uma string não vazia.");
    }
    if (password.length < 6) {
      throw new Error("A senha deve ter no mínimo 6 carcteres.");
    }

    // Atribuição dos valores aos atributos
    this.email = email;
    this.password = password;
  }

  // Função para validar o e-mail
  #isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export class UserUpdate {
  constructor(name, email, password) {
    // Validação dos campos
    if (typeof email !== "string" || !this.#isValidEmail(email)) {
      throw new Error(
        "O e-mail deve ser uma string válida. \nExemplo: teste@teste.com"
      );
    }
    if (password.trim().length > 0) {
      if (typeof password !== "string") {
        throw new Error("A senha deve ser uma string não vazia.");
      }
      if (password.length < 6) {
        throw new Error("A senha deve ter no mínimo 6 carcteres.");
      }
    }
    // Atribuição dos valores aos atributos
    this.name = name;
    this.email = email;
    this.password = password.trim().length === 0 ? null : password;
  }

  // Função para validar o e-mail
  #isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
