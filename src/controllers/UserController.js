export default class UserController {
  #baseUrl = "https://capitech-back.vercel.app";

  async login(user) {
    try {
      const data = await fetch(`${this.#baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => res.json());

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  async register(user) {
    try {
      const data = await fetch(`${this.#baseUrl}/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => res.json());

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  async validateToken(token) {
    try {
      const data = await fetch(`${this.#baseUrl}/validateToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
      }).then((res) => res.json());

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  async update(id, user) {
    try {
      const data = await fetch(`${this.#baseUrl}/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => res.json());

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const data = await fetch(`${this.#baseUrl}/user/${id}`, {
        method: "DELETE",
      }).then((res) => res.json());

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }
}
