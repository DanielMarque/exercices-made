interface DadosEmail {
  para: string;
  id: string;
  assunto: string;
}

function sendEmail({ assunto, para, id }: DadosEmail) {
  console.log(`\n Assunto: ${assunto} \n ID: ${id} \n Para: ${para}`);
}

class GerenciaEmail {
  getEmail() {
    sendEmail({
      assunto: "O dia está Bonito",
      id: "asd15",
      para: "Daniel Marques",
    });
  }
}

const nomep1 = new GerenciaEmail();
nomep1.getEmail();
