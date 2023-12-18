import { Header } from "@/components/Header";
import {
  Book,
  BookInfo,
  BookStars,
  Books,
  ExploreContainer,
  GenreTags,
  SearchBookBox,
  SearchBookForm,
  SearchBookInput,
  Tag,
} from "./styles";
import { ReactElement, useEffect, useState } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import { MagnifyingGlass } from "phosphor-react";
import Image from "next/image";
import bookImg from "../../../public/assets/Book3.png";
import { Stars } from "@/components/Stars";

import * as Dialog from "@radix-ui/react-dialog";
import { BookModal } from "@/components/BookModal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { GetStaticProps } from "next";

const searchBookFormSchema = z.object({
  query: z.string().min(1, { message: "Digite algum livro ou autor" }),
});

type SearchBookFormData = z.infer<typeof searchBookFormSchema>;

interface Book {
  id: string;
  name: string;
  author: string;
  cover_url: string;
}

interface Category {
  id: string;
  name: string;
}

interface ExploreProps {
  initialBooks: Book[];
  initialCategories: Category[];
}

export default function Explore({
  initialBooks,
  initialCategories,
}: ExploreProps) {
  const [books, setBooks] = useState<Book[] | null>(initialBooks);

  const categories: Category[] = initialCategories;

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: "Tudo",
    name: "Tudo",
  });

  const [bookIdSelected, setBookIdSelected] = useState("");

  async function fetchBooksOnCategory(categoryId: string) {
    try {
      const { data } = await api.get<Book[]>(`/books/categories/${categoryId}`);
      setBooks(data);
    } catch (error) {
      console.log("Error fetching books: ", error);
    }
  }

  useEffect(() => {
    fetchBooksOnCategory(selectedCategory.id);
  }, [selectedCategory]);

  function handleSearchBookForm(data: SearchBookFormData) {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchBookFormData>({
    resolver: zodResolver(searchBookFormSchema),
  });

  const searchBookForm = (
    <SearchBookForm onSubmit={handleSubmit(handleSearchBookForm)}>
      <SearchBookBox>
        <SearchBookInput
          type="text"
          placeholder="Buscar livro ou autor"
          {...register("query")}
        />

        <MagnifyingGlass size={20} />
      </SearchBookBox>
    </SearchBookForm>
  );

  return (
    <>
      <Header
        route="explorar"
        title="Explorar"
        children={searchBookForm}></Header>
      <ExploreContainer>
        <GenreTags>
          <Tag
            key="dftr15g2e7fz8"
            onClick={() => setSelectedCategory({ name: "Tudo", id: "Tudo" })}
            active={selectedCategory.name === "Tudo"}>
            Tudo
          </Tag>

          {categories &&
            categories.map((category) => {
              return (
                <Tag
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory({
                      name: category.name,
                      id: category.id,
                    })
                  }
                  active={selectedCategory.name === category.name}>
                  {category.name}
                </Tag>
              );
            })}
        </GenreTags>

        <Dialog.Root>
          <Books>
            {books?.map((book) => {
              return (
                <Dialog.Trigger
                  asChild
                  key={book.id}
                  onClick={() => setBookIdSelected(book.id)}>
                  <Book>
                    <Image
                      src={book.cover_url}
                      alt={book.name}
                      width={108}
                      height={152}
                    />

                    <BookInfo>
                      <h4>{book.name}</h4>
                      <span>{book.author}</span>

                      <BookStars>
                        <Stars amount={5} />
                      </BookStars>
                    </BookInfo>
                  </Book>
                </Dialog.Trigger>
              );
            })}
          </Books>

          {books && <BookModal bookId={bookIdSelected} />}
        </Dialog.Root>
      </ExploreContainer>
    </>
  );
}

Explore.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getStaticProps: GetStaticProps<ExploreProps> = async () => {
  const fetchBooks = async () => {
    try {
      const { data } = await api.get("/books");
      return data;
    } catch (error) {
      console.log("Error fetching books: ", error);
      return [];
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/books/categories");

      return data;
    } catch (error) {
      console.log("Error fetching categories: ", error);
      return [];
    }
  };

  const initialBooks = await fetchBooks();
  const initialCategories = await fetchCategories();

  return {
    props: {
      initialBooks: initialBooks,
      initialCategories: initialCategories,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};
