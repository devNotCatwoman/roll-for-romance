import { useState } from "react";
import heroImg from "./assets/roll4romance.png";
import "./App.css";

function App() {
  const [trope, setTrope] = useState("");
  const [setting, setSetting] = useState("");
  const [meetCute, setMeetCute] = useState("");
  const [monster, setMonster] = useState("");

  const tropes = [
    "Fated Mates",
    "Forbidden Love",
    "Fake Dating",
    "Friends to Lovers",
    "Enemies to Lovers",
    "Second Chance",
  ];

  const settings = [
    "Small Town",
    "Fantasy World",
    "Big City",
    "Magical Academy",
    "Workplace",
  ];

  const meetCutes = [
    "An Intentional Summoning",
    "An Accidental Summoning",
    "Mistaken Identity",
    "A Rescue Situation",
    "Forced Proximity",
    "Pet-related Chaos",
    "Chance Encounter",
    "Weather-related Chaos",
    "A Shared Mission",
    "Travel-related Chaos",
  ];

  const monsters = [
    "a Vampire",
    "a Demon",
    "a Werewolf",
    "a Shifter",
    "an Orc",
    "a Witch",
    "a Fae",
    "a Gargoyle",
    "a Minotaur",
    "a Merman",
  ];

  const rollTropes = () => {
    const index = Math.floor(Math.random() * 6);
    setTrope(tropes[index]);
  };

  const rollSettings = () => {
    const index = Math.floor(Math.random() * 5);
    setSetting(settings[index]);
  };

  const rollMeetCutes = () => {
    const index = Math.floor(Math.random() * 10);
    setMeetCute(meetCutes[index]);
  };

  const rollMonsters = () => {
    const index = Math.floor(Math.random() * 10);
    setMonster(monsters[index]);
  };

  const clearPrompt = () => {
    setMeetCute();
    setMonster();
    setSetting();
    setTrope();
  };

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" alt="" />
        <div>
          <p>
            Roll the dice to randomly generate a monster romance short story
            prompt using RNG.
          </p>
          <br />
        </div>
        <div className="flex-container">
          <div className="item1">
            <button onClick={rollTropes}>Roll a D6 to Choose the Trope</button>
            {trope && (
              <div className="result">
                <p>
                  <b>Your Trope:</b>
                </p>
                <p>{trope}</p>
              </div>
            )}
          </div>
          <div className="item2">
            <button onClick={rollSettings}>
              Roll a D5 to Choose the Setting
            </button>

            {setting && (
              <div className="result">
                <p>
                  <b>Your Setting:</b>
                </p>
                <p>{setting}</p>
              </div>
            )}
          </div>
          <div className="item3">
            <button onClick={rollMeetCutes}>
              Roll a D10 to Choose the Meet Cute
            </button>

            {meetCute && (
              <div className="result">
                <p>
                  <b>Your Meet Cute:</b>
                </p>
                <p>{meetCute}</p>
              </div>
            )}
          </div>
          <div className="item4">
            <button onClick={rollMonsters}>
              Roll a D10 to Choose the Monster
            </button>

            {monster && (
              <div className="result">
                <p>
                  <b>Your Monster:</b>
                </p>
                <p>{monster}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {trope && setting && meetCute && monster ? (
        <div className="result">
          <h3>Your Story Prompt:</h3>
          <p>
            A {trope.toLowerCase()} romance set in a {setting.toLowerCase()},
            with <br /> {monster.toLowerCase()} hero where the characters meet
            through {meetCute.toLowerCase()}.
          </p>
        </div>
      ) : (
        <p>Roll all four to generate your final prompt!</p>
      )}
      <br />
      <br />
      <button onClick={clearPrompt}>Click to clear prompts</button>
      <br />
      <br />
      <footer>
        <p>Made by Kenzie James.</p>
      </footer>
    </section>
  );
}

export default App;
