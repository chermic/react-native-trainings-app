import { useEffect, useState } from "react";

export type CauseResponse = {
  person: {
    name: string;
    age: number;
  };
  cause: {
    goal: number;
    raised: number;
    picked: boolean;
    mainImage: string;
    needs: string;
    favorite: boolean;
    photos: string[];
    photosDescription: string;
    description: string[];
    donators: {
      count: number;
      avatars: string[];
    };
  };
  comments: {
    text: string;
    liked: boolean;
    likesCount: number;
    replies: { count: number; avatars: string[] };
    author: {
      name: string;
      avatar: string;
      donation: number;
    };
  }[];
  handledBy: {
    location: string;
    name: string;
    image: string;
  };
};

const response: CauseResponse = {
  person: {
    name: "John",
    age: 54,
  },
  cause: {
    goal: 1000,
    raised: 200,
    picked: true,
    mainImage: "https://placehold.co/305x392/png",
    needs: "leg prosthesis",
    favorite: false,
    photos: [
      "https://placehold.co/201x261/png",
      "https://placehold.co/201x261/png",
      "https://placehold.co/201x261/png",
      "https://placehold.co/201x261/png",
    ],
    photosDescription: "John’s old photos. Provided by the family.",
    description: [
      "John is an ex-basketball player. He lives in Bronx and is the soul of the local community.",
      "He has a dog, Christi, and two children – Laura and Di Angelo. They both live in San Francisco, so John is dealing with live all by himself.",
      "John’s biggest dream is to visit Warsaw, Poland where his family comes from.",
    ],
    donators: { count: 0, avatars: [] },
  },
  comments: [
    {
      text: "John’s life sounds really inspiring. I hope that everything goes well and he gets his new leg in the end.",
      author: {
        name: "Lilian",
        donation: 291,
        avatar: "https://placehold.co/24x24/png",
      },
      liked: false,
      likesCount: 231,
      replies: {
        count: 2,
        avatars: [
          "https://placehold.co/24x24/png",
          "https://placehold.co/24x24/png",
        ],
      },
    },
    {
      text: "John’s life sounds really inspiring. I hope that everything goes well and he gets his new leg in the end.",
      author: {
        name: "Lilian",
        donation: 291,
        avatar: "https://placehold.co/24x24/png",
      },
      liked: false,
      likesCount: 231,
      replies: {
        count: 2,
        avatars: [
          "https://placehold.co/24x24/png",
          "https://placehold.co/24x24/png",
        ],
      },
    },
  ],
  handledBy: {
    image: "https://placehold.co/134x162/png",
    location: "Williamsburg, NYC",
    name: "Heart of Dinner",
  },
};

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [causeInfo, setCauseInfo] = useState<CauseResponse | null>(null);

  useEffect(() => {
    setIsLoading(true);
    new Promise<CauseResponse>((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2);
    })
      .then((response) => setCauseInfo(response))
      .finally(() => setIsLoading(false));
    // const response = fetch("someUrl?count=3&offset=2", { method: "GET" });
  }, []);

  return {
    data: causeInfo,
    isLoading,
  };
};
