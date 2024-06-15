export default class TrailController {
  #baseUrl = "https://capitech-back.vercel.app";

  async getTrails() {
    try {
      const data = await fetch(`${this.#baseUrl}/trilhas`).then((res) =>
        res.json()
      );

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  async getTrail(id) {
    try {
      const data = await fetch(`${this.#baseUrl}/trilhas/${id}`).then((res) =>
        res.json()
      );

      return data;
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }
}
