import {
	Divider,
	Flex,
	Heading,
	HStack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import irlImg from '../../public/assets/images/irl-photo.jpg';

const AboutPage: NextPage = () => {
	const bgGradient = useColorModeValue(
		'linear(to-b,brand.100,brand.400)',
		'linear(to-b,brand.700,brand.900)'
	);
	return (
		<>
			<Flex
				flexDir='column'
				pt={4}
				px={6}
				bgGradient={bgGradient}
				pb={8}
				minH='80vh'
			>
				<VStack maxW='1200px' mx='auto' spacing={4}>
					<VStack as='section' align='flex-start'>
						<Heading as='h2' size='lg'>
							The What
						</Heading>
						<Text>
							The Elevated X Otaku Podcast is a passion project born from the
							desire to merge the worlds of anime and self-improvement in a way
							that&apos;s both informative and fun. In each episode we&apos;ll
							cover topics like, &ldquo;An Otaku&apos;s Guide to Making
							Friends&rdquo;, &ldquo;How to Discover Your Passion&rdquo;, or
							&ldquo;Anime Convention Etiquette&rdquo; while pairing each lesson
							with bingeable anime recommendations.
						</Text>
					</VStack>
					<HStack as='section' spacing={4} h={['25vh', '10vh', '5vh']}>
						<Divider
							orientation='vertical'
							borderColor='black'
							ml={8}
							borderWidth={3}
						/>
						<Text>
							The Elevated X Otaku podcast is a self-improvement podcast created
							for anime and manga fans that delivers insightful, empowering, and
							entertaining messages about life, love, and mental health through
							the lense of your favorite fandoms.
						</Text>
					</HStack>
					<Divider borderColor='black' />
					<VStack as='section' align='flex-start'>
						<Heading as='h2' size='lg'>
							The Why
						</Heading>
						<Text>
							Real fans know that anime is more than just &ldquo;Japanese
							cartoons&rdquo;. Through its complex characters, harrowing
							adventures, and impactful messages, so many of us have embraced it
							as an escape from life&apos;s worries. But the thing that truly
							makes anime special, is that it&apos;s not just all about
							escapism. The lessons we learn from episode to episode can help us
							gain comfort, spark motivation, and build a community that
							actively helps us grow and prepare for the real world.
						</Text>
						<Text alignSelf='center' fontWeight='bold'>
							And that&apos;s where the E x O podcast comes in!
						</Text>
						<Text>
							Just like the medium we&apos;re inspired by, the E x O podcast
							exists to make your life...better! It was initially created to dig
							through the millions of episodes of anime out there to find
							nuggets of inspiration that you can apply to your everyday life,
							but now it is evolving into a positive and supportive community.
							Whether you&apos;re struggling with self-esteem, wanting to learn
							how to get out of your comfort zone, searching for yourself, or
							wanting to connect with others, the Elevated X Otaku is here for
							you with years of study, firsthand experience, and a dash of
							comedy to keep the mood light and goofy.
						</Text>
					</VStack>
					<Divider borderColor='blackAlpha' />
					<VStack as='section' align='flex-start'>
						<Heading as='h2' size='lg'>
							The Who
						</Heading>
						<Text>
							Hi, there! My name is Tiffany, and I&apos;ll be your host during
							these audio adventures. I&apos;m guessing this is the part where I
							should stare off into the distance to trigger a flashback scene…
						</Text>
						<Flex flexDir='column'>
							<Text>~ ~</Text>
							<Text ml={2}>~ ~</Text>
							<Text ml={4}>~ ~</Text>
							<Text ml={6}>~ ~</Text>
						</Flex>
						<Text>
							My love of anime first started before I even knew what anime was,
							with a Miyazaki film called Kiki&apos;s Delivery Service. As a
							little girl I didn&apos;t know the difference between that movie
							and “regular cartoons.” But looking back after all these years, I
							can honestly say that that movie was one of the few
							&ldquo;cartoons&rdquo; that actually stuck with me. At that age, I
							wouldn&apos;t have been able to articulate that it was the deeper
							messages of pushing through self-doubt that tugged at my heart. I
							didn&apos;t have life experience to understand that it was the
							uplifting story about a character forcing herself to be brave when
							she was frozen in place that made this movie special. Back then,
							all I knew was that it was pretty, it made me cry, it made me
							laugh, and it made me feel like I, too, could fly! (A theory that
							young Tiffany quickly disproved by jumping off of the couch on a
							broom and splitting her lip on a coffee table). I may not have
							understood exactly why that particular movie stood out, but I knew
							that from then on whenever I saw cartoons in that art style I just
							HAD to watch them!
						</Text>
						<Text>
							Time skip to me continuing on my anime journey and learning about
							things like the strength of &ldquo;girl power&rdquo; from Sailor
							Moon, the art of perseverance from Pokémon, and how to be a total
							badass from Dragon Ball Z. And as I continued to grow up and
							experienced new joys, new struggles, and new challenges in life,
							anime was right there – growing alongside me; With shows like
							Cowboy Bebop, Fruits Basket, and Full Metal Alchemist helping to
							give me a framework and an outlet for understanding and dealing
							with the unfamiliar territory of maturing.
						</Text>
						<Text>
							And that brings us to present day Tiffany! I stand (sit) before
							you now, a fully formed otaku with 100+ anime under my belt, and
							the values that each one of those shows has taught me. Values like
							patience (…I&apos;m still perfecting that one), humility,
							friendship, determination, and above all else - the desire to help
							people. Hence, the reason for the EXO podcast and EXO community.
							The thing that makes me happiest in life is knowing that I&apos;ve
							helped, entertained, or made a difference in the lives of others –
							especially those who, like me, may have been ostracized, shut out,
							or looked down on. I&apos;ve accumulated a lot of knowledge
							throughout my studies in psychology, diving head first into life,
							and picking myself up again and again as I set out to explore this
							world and everything it has to offer. The least I can do is to
							share that knowledge in hopes that it helps even one other person
							while they&apos;re on their hero&apos;s journey.{' '}
						</Text>
						<Text>
							{' '}
							If you want to become a part of this growing community of freaks,
							geeks, and weebs subscribe to the podcast, follow me on my
							socials, or just pop in and say hi!{' '}
						</Text>
					</VStack>
				</VStack>
			</Flex>
		</>
	);
};

export default AboutPage;
