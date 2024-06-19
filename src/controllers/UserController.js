export default class UserController {
  #baseUrl = "https://capitech-back.vercel.app";

  // async getUsers() {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/trilhas`).then((res) =>
  //       res.json()
  //     );

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async getUsers() {
    try {
      const response = await fetch(`${this.#baseUrl}/trilhas`);
      const data = await response.json();

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  // async login(user) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async login(user) {
    try {
      const response = await fetch(`${this.#baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  // async register(user) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/cadastro`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async register(user) {
    try {
      const response = await fetch(`${this.#baseUrl}/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  // async validateToken(token) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/validateToken`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async validateToken(token) {
    try {
      const response = await fetch(`${this.#baseUrl}/validateToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  // async update(token, id, user) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/user/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(user),
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async update(token, id, user) {
    try {
      const response = await fetch(`${this.#baseUrl}/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (response.status === 401) {
        throw new Error("401");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error.message === "401") {
        throw new Error("401");
      }
      alert(`Erro: ${error.message}`);
    }
  }

  // async delete(id) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/user/${id}`, {
  //       method: "DELETE",
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async delete(token, id) {
    try {
      const response = await fetch(`${this.#baseUrl}/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 401) {
        throw new Error("401");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error.message === "401") {
        throw new Error("401");
      }
      alert(`Erro: ${error.message}`);
    }
  }
}
