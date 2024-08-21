import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: '/es.svg'
      },
      {
        id: 2,
        title: "French",
        imageSrc: '/fr.svg'
      },
      {
        id: 3,
        title: "Greek",
        imageSrc: '/gr.svg'
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: '/hr.svg'
      },
      {
        id: 5,
        title: "Indian",
        imageSrc: '/in.svg'
      },
      {
        id: 6,
        title: "Japanese",
        imageSrc: '/jp.svg'
      },
      {
        id: 7,
        title: "Dutch",
        imageSrc: '/nl.svg'
      },
      {
        title: "Portuguese",
        imageSrc: '/pt.svg'
      },
      {
        title: "English",
        imageSrc: '/us.svg'
      },
      {
        title: "Italian",
        imageSrc: '/it.svg'
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 3,
        title: "Unit 1",
        description: "Introduction to Greek",
        order: 1
      }
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        order: 1
      },
      {
        id: 2,
        unitId: 1,
        title: "Verbs",
        order: 2
      },
      {
        id: 3,
        unitId: 1,
        title: "Verbs",
        order: 3
      },
      {
        id: 4,
        unitId: 1,
        title: "Verbs",
        order: 4
      },
      {
        id: 5,
        unitId: 1,
        title: "Verbs",
        order: 5
      },
      {
        id: 6,
        unitId: 1,
        title: "Verbs",
        order: 6
      },
      {
        id: 7,
        unitId: 1,
        title: "Verbs",
        order: 7
      },
      {
        id: 8,
        unitId: 1,
        title: "Verbs",
        order: 8
      }
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        question: 'Which one of these is "the man"',
        type: "SELECT",
        order: 1
      }
    ]);
    
    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "ο άνδρας",
        audioSrc: "/gr_man.mp3"
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "η γυναίκα",
        audioSrc: "/gr_woman.mp3"
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: true,
        text: "το ρομπότ",
        audioSrc: "/gr_robot.mp3"
      },
    ]);

    console.log("Seeding finished");

  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();