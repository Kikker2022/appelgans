import alleVragen from "./src/data/vragen.js";
function pakVraag(rubriek) {

  const selectie = alleVragen.filter(
    v => v.rubriek === rubriek
  );

  return selectie[
    Math.floor(Math.random() * selectie.length)
  ];

}
const vraag = pakVraag("TopoVMBO");

document.getElementById("vraag").innerText = vraag.vraag;
function controleerAntwoord(antwoordSpeler) {

  if(antwoordSpeler.toLowerCase() === vraag.antwoord.toLowerCase()){
      alert("Goed!");
  } else {
      alert("Fout! Antwoord was: " + vraag.antwoord);
  }

}
supabase
.from("teams")
.update({ positie: vak })
.eq("team", teamNaam);
supabase
.channel("teams")
.on(
  "postgres_changes",
  { event: "UPDATE", schema: "public", table: "teams" },
  payload => {

     updatePion(payload.new.team, payload.new.positie);

  }
)
.subscribe();
Topo VMBO
Ooststellingwerf 15-40
Ooststellingwerf 40-70
Landmeetkunde
gameSettings
rubriek = "TopoVMBO"
