<script lang="ts">
	import Badge from '$lib/components/Badge.svelte'
	import Info from '$icon/Info/Info.svelte'
</script>

<div class="absolute w-full font-extralight">
	<div class="container mx-auto">
		<div
			id="resume"
			class="p-10 rounded-md bg-white bg-opacity-90 text-black
        mx-2 lg:mx-7 xl:mx-10 2xl:mx-0
        my-20 2xl:my-40
        print:my-10
        print:mx-5
        print:bg-opacity-80
      "
		>
			<div>
				<h3 class="text-4xl">Daison Cariño</h3>
				<p class="text-sm">
					Email: <a href="mailto:daison12006013@gmail.com">daison12006013@gmail.com</a><br />
					GitHub:
					<a href="http://github.com/daison12006013">http://github.com/daison12006013</a><br />
					LinkedIn:
					<a href="https://www.linkedin.com/in/daison-carino-56319471"
						>https://www.linkedin.com/in/daison-carino-56319471</a
					>
				</p>
				<h4 class="mt-5 font-normal">Objectives</h4>
				<p>
					Enthusiasts to any I.T. related jobs most probably software or web development; an
					opportunity to help the company to become more productive and efficient. I’m here to apply
					my expertise, skills and knowledge. I’m able to work individually or to work as a team to
					achieve the company’s goals.
				</p>
				<h4 class="mt-5 font-normal">Areas of Expertise</h4>
				<ul class="list-disc pl-10">
					<li>Open Source Enthusiasts</li>
					<li>Leading a Team or Project</li>
					<li>Analysis, Design and Implementations</li>
					<li>Coding Structures & Designs</li>
					<li>Scrum Management</li>
				</ul>
				<h4 class="mt-5 font-normal">Programming / Scripting Languages</h4>
				<ul class="list-disc pl-10">
					<li>NodeJS (w/ Serverless | AWS Lambda experience)</li>
					<li>PHP</li>
					<li>GoLang</li>
					<li>S|CSS / Tailwind / Bulma / Bootstrap</li>
					<li>ReactJS / VueJS / (Sapper | SvelteKit)</li>
					<ul class="list-disc pl-5">
						<li class="text-xs font-italic">Most of the time exploring SvelteKit</li>
					</ul>
				</ul>

				<h4 class="mt-5 font-normal">Work History</h4>
				<ul class="list-disc pl-10">
					<li>
						<code>Incube8 Pte. Ltd.</code> <em>[December 2018 - Current]</em>
						<ul class="list-disc pl-10">
							<li><code>TODO...</code></li>
						</ul>
					</li>
					<li>
						<code>Plus65 Interactive Pte. Ltd.</code> <em>[Oct 3, 2016 - December 2018]</em>
						<ul class="list-disc pl-10">
							<li class="pb-3">
								<code>ArrowMii</code> Project Lead
								<p class="pl-5">
									<Badge roundedSize="full" type="info">
										<Info width="15" height="15" />
									</Badge>
									A web and mobile provider for Part Timers / Freelancers and for Enterprises
								</p>
							</li>
							<ul class="list-disc pl-10">
								<li>
									Architected the Database Schema and Code Structure
									<ul class="list-disc pl-10">
										<li>
											Implemented a RESTful API for both Part Timer Talent (PTT) and Admin Panel
										</li>
									</ul>
								</li>
								<li>
									Centralized API for both Web and Mobile.
									<ul class="list-disc pl-10">
										<li>Implemented OAuth2 as authentication.</li>
									</ul>
								</li>
								<li>
									Implemented Push / In-App / Email; Notifications
									<ul class="list-disc pl-10">
										<li>Push under OneSignal as a Service.</li>
										<li>In-App using native implementation in Laravel.</li>
										<li>Email using Mailgun as a Service.</li>
									</ul>
								</li>
								<li>Handled Queue Server using Beanstalkd with Supervisord</li>
								<li>
									Most Notable Implementations:
									<ul class="list-disc pl-10">
										<li>
											Matching Logic based on dynamic computation based on PTT's completion of each
											event.
										</li>
										<li>
											Rating calculation based on the event done and rates from an Enterprise
											(company).
										</li>
										<li>
											Calculated Broadcasting based on the activity of the user if active or
											passive.
										</li>
										<li>
											Event (Job) availability based on different scenarios as well on PTT's
											schedule and also the event and many more.
										</li>
									</ul>
								</li>
								<li>
									Others
									<ul class="list-disc pl-10">
										<li>Participating with the Frontend Side Implementation too if needed.</li>
										<li>Handled servers from Staging, UAT up until Production.</li>
										<li>Continuous Integration</li>
										<li>Unit Testing before auto Deploy using GitLabCI.</li>
										<li>Manageable Translations and Finder.</li>
										<li>Module based Implementation using "nwidart/laravel-modules" package.</li>
									</ul>
								</li>
							</ul>
						</ul>
					</li>
					<li>
						<code>VroomVroomVroom Pty. Ltd.</code> (Provides a car rental comparison website)
						<em>[Jul 13, 2015 - Sept 16, 2016]</em>
						<ul class="list-disc pl-10">
							<li>Centralizing an API for <code>web app</code> and <code>mobile app</code></li>
							<li>
								Connecting thru all available car rentals such as <code>Avis</code>,
								<code>Budget</code>, <code>Redspot</code> and many more into 1 API.
							</li>
						</ul>
					</li>
					<li>
						<code>Pilipinas Teleserv Inc.</code> (A customer care service provider)
						<em>[Dec 2, 2013 - June 25, 2015]</em>
						<ul class="list-disc pl-10">
							<li>
								Built the <a href="http://secexpress.ph">http://secexpress.ph</a> that you could request
								for a company document.
							</li>
							<li>
								Built the internal <code>Watsons</code> ordering system which comes with inventory system.
							</li>
							<li>
								Support Developer for
								<ul class="list-disc pl-10">
									<li>
										<a href="http://nsohelpline.com.ph">http://nsohelpline.com.ph</a> provides Birth
										Certificates / CeNoMar / Marriage Certificate
									</li>
									<li>
										<a href="http://passport.com.ph">http://passport.com.ph</a> provides an online booking
										to get a new/renew passport.
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	@media print {
		:global(header) {
			display: none !important;
		}
	}
</style>
