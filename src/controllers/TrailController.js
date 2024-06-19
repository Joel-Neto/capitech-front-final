export default class TrailController {
  #baseUrl = "https://capitech-back.vercel.app";

  // async getTrails() {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/trilhas`).then((res) =>
  //       res.json()
  //     );

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async getTrails() {
    try {
      const response = await fetch(`${this.#baseUrl}/trilhas`);
      const data = await response.json();

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  // async getTrail(id) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/trilhas/${id}`).then((res) =>
  //       res.json()
  //     );

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async getTrail(id) {
    try {
      const response = await fetch(`${this.#baseUrl}/trilhas/${id}`);
      const data = await response.json();

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  // async createTrail(token, trail) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/trilhas`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify(trail),
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }

  async createTrail(token, trail) {
    try {
      const response = await fetch(`${this.#baseUrl}/trilhas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(trail),
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

  // async update(token,id, trail) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/trilhas/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify(trail),
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async update(token, id, trail) {
    try {
      const response = await fetch(`${this.#baseUrl}/trilhas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(trail),
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

  // async delete(token,id) {
  //   try {
  //     const data = await fetch(`${this.#baseUrl}/trilhas/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "authorization": `Bearer ${token}`
  //       },
  //     }).then((res) => res.json());

  //     return data;
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   }
  // }
  async delete(token, id) {
    try {
      const response = await fetch(`${this.#baseUrl}/trilhas/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
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
