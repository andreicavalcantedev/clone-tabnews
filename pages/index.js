function HomeScreen() {
  const dayOfTheWeek = new Date().getDay();

  const daysOfTheWeekNames = {
    0: "Domingo",
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-feira",
    4: "Quinta-feira",
    5: "Sexta-feira",
    6: "Sábado",
  };

  function daysOfTheWeekInString(dayOfTheWeek) {
    return (
      String(daysOfTheWeekNames[dayOfTheWeek]) || "Não sei que dia é esse... :("
    );
  }

  return <h1>Oi! Hoje é: {daysOfTheWeekInString(dayOfTheWeek)}</h1>;
}

export default HomeScreen;
