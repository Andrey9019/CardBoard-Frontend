import Image from "next/image";
import aboutPic from "../../../../public/images/About.png";

export default function About() {
	return (
		<section className="mb-12 px-9 lg:mb-16 lg:px-8 xl:px-[120px]">
			<h3 className="mb-9 text-center text-3xl font-bold lg:text-4xl">
				Про нас
			</h3>
			<div className="flex flex-col items-center lg:flex-row">
				<Image
					src={aboutPic}
					// width={300}
					// height={300}
					alt="Just a picture from the about us section"
					className="mb-4 object-cover lg:mr-4 lg:mb-0 lg:min-w-[360px] xl:mr-10 xl:max-w-[372px]"
				/>
				<div>
					<p className="text-sm lg:text-base xl:text-lg">
						Card&Board – це магазин для всіх, хто захоплюється настільними
						іграми. Ми пропонуємо широкий вибір настільних розваг: від стратегій
						і карткових ігор до сімейних та кооперативних варіантів. У нас ви
						знайдете як популярні хіти, так і рідкісні новинки, що тільки
						з’явилися на ринку.
					</p>
					<br />
					<p className="text-sm lg:text-base xl:text-lg">
						Ми піклуємося про якість сервісу, тому пропонуємо зручний процес
						оформлення замовлення, оперативну обробку та швидку доставку. Наші
						клієнти завжди можуть розраховувати на консультацію при виборі гри –
						ми допоможемо знайти ідеальний варіант для будь-якої компанії та
						нагоди.
					</p>
					<br />
					<p className="text-sm lg:text-base xl:text-lg">
						Для постійних покупців у нас діють спеціальні пропозиції, бонуси та
						акційні знижки. Ми прагнемо зробити настільні ігри доступними для
						всіх, хто хоче проводити час із задоволенням, відкриваючи для себе
						нові механіки, сюжети та емоції.
					</p>
					<p className="text-sm lg:text-base xl:text-lg">
						Замовляйте в Card&Board і отримуйте найкращі настільні ігри з
						комфортом та впевненістю у високій якості обслуговування.
					</p>
				</div>
			</div>
		</section>
	);
}
