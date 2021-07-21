describe("Search test suite", () => {
    it("should search songs", () => {
      const authHeader = "Basic MTE5Y2Y4MTI2MWVlNGFjNWI3YjQ5ZTA5M2M4ZmNlNzI6ZWEzZGRlMmMwMDdlNGVkYTliNGFkYTc1M2I0MzViYTM=";
  
      const options = {
        method: "POST",
        url: "https://accounts.spotify.com/api/token",
        form: true,
        body: {
          grant_type: "client_credentials"
        },
        headers: {
          Authorization: authHeader
        }
      };
  
      cy.request(options).then(resp => {
        localStorage.setItem("token", resp.body.access_token);
      });
  
      cy.visit("http://localhost:3000");
    });
  });