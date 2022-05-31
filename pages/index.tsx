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

  const TITLE = "Goblin Translator";
  const DESCRIPTION =
    "goblintown.wtf inspired translator for hoomans to gooblins";
  const URL = "https://goblin-speak.vercel.app";
  const IMAGE = `${URL}/goblin-9871.png`;

  return (
    <>
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

        <h1>{normalTextToGoblinText("goblin translator")}</h1>

        <main>
          <div>
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
          </div>
        </main>

        <footer className={styles.footer}>
          <p>
            Built by{" "}
            <a
              href="https://twitter.com/jarrensj"
              target="_blank"
              rel="noreferrer"
            >
              goblin #8723
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/johnphamous"
              target="_blank"
              rel="noreferrer"
            >
              goblin #9871
            </a>
          </p>
        </footer>
      </div>
    </>
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
  b: "b",
  c: "c",
  d: "d",
  e: "ₑ",
  f: "f",
  g: "g",
  h: "ₕ",
  i: "ᵢ",
  j: "ⱼ",
  k: "ₖ",
  l: "ₗ",
  m: "ₘ",
  n: "ₙ",
  o: "ₒ",
  p: "ₚ",
  q: "ᵩ",
  r: "ᵣ",
  s: "ₛ",
  t: "ₜ",
  u: "ᵤ",
  v: "ᵥ",
  w: "w",
  x: "ₓ",
  y: "y",
  z: "z",
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
};
