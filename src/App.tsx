import { useState } from "react";
import type { CSSProperties } from "react";
import { achievements, type Achievement } from "./achievements";
import starAtlas from "../stars.png";
import treeImage from "../tree.png";

type CustomStyle = CSSProperties & Record<`--${string}`, string>;

type StarSprite = {
  x: number;
  y: number;
  w: number;
  h: number;
};

const STAR_ATLAS = {
  width: 1024,
  height: 1536,
};

const starSprites: StarSprite[] = [
  { x: 65, y: 56, w: 235, h: 246 },
  { x: 534, y: 67, w: 201, h: 208 },
  { x: 806, y: 76, w: 178, h: 182 },
  { x: 345, y: 102, w: 151, h: 146 },
  { x: 284, y: 312, w: 179, h: 184 },
  { x: 501, y: 322, w: 143, h: 140 },
  { x: 819, y: 472, w: 152, h: 153 },
  { x: 422, y: 707, w: 136, h: 129 },
];

function createSpriteStyle(sprite: StarSprite, extra: CustomStyle = {}) {
  const backgroundX = (sprite.x / (STAR_ATLAS.width - sprite.w)) * 100;
  const backgroundY = (sprite.y / (STAR_ATLAS.height - sprite.h)) * 100;

  return {
    ...extra,
    "--star-atlas": `url(${starAtlas})`,
    "--sprite-bg-size": `${(STAR_ATLAS.width / sprite.w) * 100}% ${(STAR_ATLAS.height / sprite.h) * 100}%`,
    "--sprite-bg-position": `${backgroundX}% ${backgroundY}%`,
  } as CustomStyle;
}

function AchievementSheet({
  selected,
  onClose,
}: {
  selected: Achievement | null;
  onClose: () => void;
}) {
  if (!selected) {
    return null;
  }

  return (
    <div className="sheet-backdrop" role="presentation" onClick={onClose}>
      <article
        className="achievement-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="achievement-sheet-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="sheet-close" type="button" onClick={onClose} aria-label="Close achievement">
          x
        </button>
        <div className="sheet-handle" aria-hidden="true" />
        <p className="sheet-kicker">{selected.date}</p>
        <h2 id="achievement-sheet-title">{selected.title}</h2>
        <p>{selected.description}</p>
        <div className="sheet-details">
          <span>Kind</span>
          <strong>Personal milestone</strong>
        </div>
        <div className="sheet-actions" aria-label="Achievement actions">
          <button type="button">Edit</button>
          <button type="button">Share</button>
        </div>
      </article>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.13c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.74-1.55-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.18 1.19a10.98 10.98 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.45-2.71 5.43-5.29 5.71.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2.5h3.3l-7.2 8.2 8.5 10.8h-6.7l-5.2-6.7-6 6.7H2.3l7.7-8.7L1.8 2.5h6.8l4.7 6.1 5.6-6.1Zm-1.2 17.1h1.8L7.6 4.3h-2l12.1 15.3Z"
      />
    </svg>
  );
}

function AppFooter() {
  return (
    <footer className="app-footer">
      <p>Enjoy the little wins</p>
      <nav aria-label="Social links">
        <a
          href="https://github.com/dellamora"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub dellamora"
        >
          <GithubIcon />
        </a>
        <a
          href="https://twitter.com/francidellamora"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter francidellamora"
        >
          <TwitterIcon />
        </a>
      </nav>
    </footer>
  );
}

export function App() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const treeStyle = {
    "--tree-image": `url(${treeImage})`,
  } as CustomStyle;

  return (
    <main className="app-shell" aria-label="Achievement tree">
      <div className="cosmic-bg" aria-hidden="true" />
      <header className="hero-copy">
        <h1 className="tree-title">Happy Birthday</h1>
        <p>During your 24th year of life you:</p>
      </header>
      <div className="tree-wrap" style={treeStyle}>
        <img className="tree-art" src={treeImage} alt="" aria-hidden="true" />
        <div className="tree-flow tree-flow-primary" aria-hidden="true" />
        <div className="tree-flow tree-flow-secondary" aria-hidden="true" />
        <div className="tree-flow tree-flow-highlights" aria-hidden="true" />
        <div className="tree-bloom" aria-hidden="true" />
        {achievements.map((achievement, index) => {
          const sprite = starSprites[index % starSprites.length];

          return (
            <button
              key={achievement.id}
              type="button"
              className={`achievement-star achievement-star-${achievement.size} ${
                selectedAchievement?.id === achievement.id ? "is-active" : ""
              }`}
              style={createSpriteStyle(sprite, {
                left: `${achievement.x}%`,
                top: `${achievement.y}%`,
                "--delay": `${index * 0.34}s`,
              })}
              onClick={() => setSelectedAchievement(achievement)}
              aria-label={`Open achievement: ${achievement.title}`}
            >
              <span />
            </button>
          );
        })}
      </div>
      <AchievementSheet
        selected={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
      <AppFooter />
    </main>
  );
}
