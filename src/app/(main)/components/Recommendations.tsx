import RecommendationsList from "./RecommendationsList";

export default function Recommendations() {
	return (
		<section className="mb-12 flex flex-col gap-9 px-9 lg:mb-16 lg:px-8 xl:gap-12 xl:px-[120px]">
			<p className="text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
				Рекомендації
			</p>

			<div>
				<RecommendationsList title="Популярне" />
			</div>
			<div>
				<RecommendationsList title="Новинки" />
			</div>
			<div>
				<RecommendationsList title="Акція" />
			</div>
		</section>
	);
}
