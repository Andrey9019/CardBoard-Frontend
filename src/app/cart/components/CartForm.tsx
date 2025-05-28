import Button from "@/components/ui/Button";

export default function CartForm() {
  return (
    <div className="flex justify-center">
      <form className="item-shadow flex w-full max-w-[358px] flex-col gap-6 rounded-2xl bg-white p-6 text-black lg:max-w-[472px]">
        <h2 className="text-lg font-bold">Контакти</h2>

        <div className="flex flex-col gap-2">
          <label
            // htmlFor="name"
            className="text-xs font-semibold"
          >
            ПІБ
          </label>
          <input
            // id="name"
            // type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Ведіть своє імʼя та прізвище"
            className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs font-semibold">
            Email
          </label>
          <input
            // id="email"
            // type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Ведіть свій Email address"
            className="focus:border-primary rounded-lg border px-4 py-2 text-sm transition outline-none"
          />
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">Доставка</h3>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              // name="delivery"
              // value="pickup"
              // checked={delivery === "pickup"}
              // onChange={() => setDelivery("pickup")}
              className="accent-primary"
            />
            Самовивіз з магазину
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              // name="delivery"
              // value="pickup"
              // checked={delivery === "pickup"}
              // onChange={() => setDelivery("pickup")}
              className="accent-primary"
            />
            Самовивіз з магазину
          </label>
        </div>

        <div>
          <h3 className="mb-6 text-base font-bold">Оплата</h3>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              // name="payment"
              // value="cod"
              // checked={payment === "cod"}
              // onChange={() => setPayment("cod")}
              className="accent-primary"
            />
            Післяплата при отриманні
          </label>
        </div>

        <Button
          as="button"
          variant="primary"
          text="Оформити замовлення"
          className="min-w-full"
        />
      </form>
    </div>
  );
}
