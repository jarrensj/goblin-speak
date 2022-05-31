import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  const translatedText = useMemo(() => {
    return normalTextToGoblinText(input);
  }, [input]);

  const TITLE = normalTextToGoblinText("Goblin Translator");
  const DESCRIPTION = normalTextToGoblinText(
    "goblintown.wtf inspired translator for hoomans to gooblins"
  );
  const URL = "";
  const IMAGE = "/goblin-9871.png";

  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="goblintown.wtf inspired translator for hoomans to gooblins"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
        <meta property="twitter:image" content={IMAGE}></meta>
      </Head>

      <main>
        <h1>{normalTextToGoblinText("goblin translator")}</h1>
        <p>
          {normalTextToGoblinText(
            "ay you a hooman want to speak with us gooblins??"
          )}
        </p>

        <textarea
          style={{
            fontFamily: "'Open Sans', sans-serif",
          }}
          name=""
          id=""
          cols={30}
          rows={5}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>

        <p className={styles.translatedText}>{translatedText}</p>
      </main>
    </div>
  );
};

export default Home;

const normalTextToGoblinText = (inputText: string) => {
  const tokens = inputText.split("");

  for (let i = 0; i < tokens.length; i++) {
    const currentCharacter = tokens[i];
    const currentCharacterLowercase = currentCharacter.toLowerCase();
    const mappingExistsForCurrentCharacter = Boolean(
      CHARACTER_MAPPING[currentCharacter]
    );
    const mappingExistsForCurrentCharacterLowercase = Boolean(
      CHARACTER_MAPPING[currentCharacterLowercase]
    );

    if (mappingExistsForCurrentCharacter) {
      tokens[i] = CHARACTER_MAPPING[currentCharacter];
    } else if (mappingExistsForCurrentCharacterLowercase) {
      tokens[i] = CHARACTER_MAPPING[currentCharacterLowercase];
    }
  }
  return (inputText = tokens.join(""));
};

// TODO update mapping
const CHARACTER_MAPPING: Record<string, string> = {
  0: "₀",
  1: "₁",
  2: "₂",
  3: "₃",
  4: "₄",
  5: "₅",
  6: "₆",
  7: "₇",
  8: "₈",
  9: "₉",
  a: "ₐ",
  e: "ₑ",
  h: "ₕ",
  i: "ᵢ",
  j: "ⱼ",
  k: "ₖ",
  l: "ₗ",
  m: "ₘ",
  n: "ₙ",
  o: "ₒ",
  p: "ₚ",
  r: "ᵣ",
  s: "ₛ",
  t: "ₜ",
  u: "ᵤ",
  v: "ᵥ",
  x: "ₓ",
  A: "ₐ",
  B: "B",
  C: "C",
  D: "D",
  E: "ₑ",
  F: "F",
  G: "G",
  H: "ₕ",
  I: "ᵢ",
  J: "ⱼ",
  K: "ₖ",
  L: "ₗ",
  M: "ₘ",
  N: "ₙ",
  O: "ₒ",
  P: "ₚ",
  Q: "Q",
  R: "ᵣ",
  S: "ₛ",
  T: "ₜ",
  U: "ᵤ",
  V: "ᵥ",
  W: "W",
  X: "ₓ",
  Y: "Y",
  Z: "Z",
  "+": "₊",
  "-": "₋",
  "=": "₌",
  "(": "₍",
  ")": "₎",
  y: "ᵧ",
  b: "ᵦ",
  q: "ᵩ",
  z: "𝓏",
  w: "𝓌",
  c: "𝒸",
  d: "𝒹",
  f: "𝒻",
  g: "𝓰",
};
