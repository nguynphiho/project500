import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './MainCategory.module.scss';

const Index = () => {
	return (
		<Container>
			<div className={styles.title}>
					<h2> You need it, we've got it </h2>
			</div>
			<div className={ styles.categoryListContainer }>
				<ul className={ styles.categoriesList }>
					<li>
						<a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg" alt="Graphics &amp; Design" loading="lazy" />
              <div className={ styles.line }></div>
							Graphics &amp; Design
						</a>
					</li>
					<li>
						<a href="/categories/online-marketing?source=hplo_cat_sec&amp;pos=2">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg" alt="Digital Marketing" loading="lazy" />
							<div className={ styles.line }></div>
              Digital Marketing
						</a>
					</li>
					<li>
						<a href="/categories/writing-translation?source=hplo_cat_sec&amp;pos=3">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg" alt="Writing &amp; Translation" loading="lazy" />
							<div className={ styles.line }></div>
              Writing &amp; Translation
						</a>
					</li>
					<li>
						<a href="/categories/video-animation?source=hplo_cat_sec&amp;pos=4">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg" alt="Video &amp; Animation" loading="lazy" />
							<div className={ styles.line }></div>
              Video &amp; Animation
						</a>
					</li>
					<li>
						<a href="/categories/music-audio?source=hplo_cat_sec&amp;pos=5">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg" alt="Music &amp; Audio" loading="lazy" />
              <div className={ styles.line }></div>
              Music &amp; Audio
							</a>
						</li>
					<li>
						<a href="/categories/programming-tech?source=hplo_cat_sec&amp;pos=6">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg" alt="Programming &amp; Tech" loading="lazy"/>
							<div className={ styles.line }></div>
              Programming &amp; Tech
						</a>
					</li>
					<li>
						<a href="/categories/business?source=hplo_cat_sec&amp;pos=7">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg" alt="Business" loading="lazy" />
							<div className={ styles.line }></div>
              Business
						</a>
					</li>
					<li>
						<a href="/categories/lifestyle?source=hplo_cat_sec&amp;pos=8">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg" alt="Lifestyle" loading="lazy" />
							<div className={ styles.line }></div>
              Lifestyle
						</a>
					</li>
					<li>
						<a href="/categories/data?source=hplo_cat_sec&amp;pos=9">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg" alt="Data" loading="lazy" />
							<div className={ styles.line }></div>
              Data
						</a>
					</li>
					<li>
						<a href="/categories/photography?source=hplo_cat_sec&amp;pos=10">
							<img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg" alt="Photography" loading="lazy"/>
							<div className={ styles.line }></div>
              Photography
						</a>
					</li>
				</ul>
			</div>
		</Container>
	);
}

export default Index;
