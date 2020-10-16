const dataBase = require("./db");
const saveOrphanage = require("./saveOrphanage.js");

dataBase.then(async db => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.558049",
    lng: "-46.632898",
    name: "Lar das meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp:"87654321",
    images: [ "https://images.unsplash.com/photo-1570662518230-e097e6620e12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" ].toString(),

    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  })

  // Consultar dados
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages)

//   //Consutar somente 1 orfanato pelo ID

  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "8" ');
  // console.log(orphanage)

// //   //Remove dados da tabela

//  console.log(await db.run("DELETE FROM orphanages ")) //WHERE id = '1' 
//  console.log(await db.run("DELETE FROM orphanages ")) //WHERE id = '2' 
});
