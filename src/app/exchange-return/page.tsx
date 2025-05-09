/* eslint-disable react/no-unescaped-entities */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function ExchangePage() {
  return (
    <section className="px-9 pt-12">
      <Breadcrumb className="mb-12 hidden md:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary" href="/">
              <IoHomeOutline />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <IoIosArrowForward className="text-primary" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-bold">
              Умови обміну та повернення
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-[48px] flex h-[40px] items-center md:hidden">
        <Link href="/">
          <IoIosArrowBack size={32} style={{ color: "#0B0105" }} />
        </Link>
      </div>

      <h2 className="text-[24px] font-bold lg:text-3xl lg:text-[28px]">
        Умови обміну та повернення
      </h2>

      <div className="mx-auto my-0 mt-12 mb-12 min-w-[408px] text-[18px] md:mt-16 md:mb-16 md:w-[716px] lg:w-[994px]">
        <p>
          Якщо з будь-яких причин вас не влаштовує товар, придбаний в
          Card&Board, ви можете повернути або обміняти його протягом 14 днів з
          моменту покупки.
        </p>
        <br />
        <h3>Загальні умови повернення товару:</h3>
        <br />
        <ul>
          <li>
            Товар не повинен мати слідів активної експлуатації, на ньому не має
            бути механічних пошкоджень (подряпин, сколів, потертостей тощо);
          </li>{" "}
          <br />
          <li>
            Має бути збережено його упаковку, товарний вигляд, споживчі
            властивості та комплектність (як вказано в інструкції або на
            коробці);
          </li>{" "}
          <br />
          <li>
            При оплаті банківською картою кошти повертаються лише на банківську
            карту;
          </li>{" "}
          <br />
          <li>
            Наявність товарного або касового чека. У разі відсутності чека ми
            постараємося вам допомогти, але залишаємо за собою право попросити
            надати додаткові докази придбання товару у нас (Ст. 9 Закону України
            «Про захист прав споживачів»);
          </li>{" "}
          <br />
        </ul>
        <p>
          Для повернення товару необхідно написати нам на пошту з вказанням дати
          та номеру замовлення. Заявка опрацьовується до трьох робочих днів,
          протягом яких менеджер зв'яжеться з вами для узгодження всіх деталей.
        </p>{" "}
        <br />
        <p>
          Повернення можна здійснити Новою Поштою. При поверненні товару датою
          повернення вважається дата відправлення вами посилки. У разі
          відсутності будь-яких виробничих дефектів доставку назад сплачує
          покупець. У разі повернення товару неналежної якості (Ст. 8 Закону
          України «Про захист прав споживачів», ст.1, п.12-13) магазин бере на
          себе витрати за пересилку.
        </p>
      </div>
    </section>
  );
}
