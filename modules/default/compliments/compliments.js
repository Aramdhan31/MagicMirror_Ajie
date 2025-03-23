/* global Cron */

Module.register("compliments", {
	// Module config defaults.
	defaults: {
	  compliments: {
		"2025-01-16": {
		  quote: "Shree Ram Jaya Ram Jaya Jaya Ram",
		  translation: "Glory to Lord Rama, the Supreme Soul who guides and protects all."
		},
		"2025-01-17": {
		  quote: "Jai Hanuman Gyan Gun Sagar, Jai Kapis Tihun Lok Ujagar",
		  translation: "Victory to Hanuman, the ocean of wisdom and virtue, who illuminates all the three worlds."
		},
		"2025-01-18": {
		  quote: "Skill in action is yoga.",
		  source: "Bhagavad Gita, 2:50"
		},
		"2025-01-19": {
		  quote: "Where Krishna, the Lord of Yoga, and Arjuna, the archer, are present, there lies victory, prosperity, and justice.",
		  source: "Bhagavad Gita, 18:78"
		},
		"2025-01-20": {
		  quote: "Jai Hanuman Gyan Gun Sagar, Jai Kapis Tihun Lok Ujagar",
		  translation: "Victory to Hanuman, the ocean of wisdom and virtue, who illuminates the three worlds."
		},
		"2025-01-21": {
		  quote: "Anger leads to confusion, which leads to loss of memory and destruction of reason. When reason is destroyed, one is ruined.",
		  source: "Bhagavad Gita, 2:63"
		},
		"2025-01-22": {
		  quote: "Ram Lakhan Janaki, Jai Bolo Hanuman Ki",
		  translation: "Glory to Ram, Lakshman, Sita, and Hanuman."
		},
		"2025-01-23": {
		  quote: "The soul is neither born, nor does it die. It is eternal and imperishable.",
		  source: "Bhagavad Gita, 2:20"
		},
		"2025-01-24": {
		  quote: "Vasudeva Sutam Devam, Kamsa Chanura Mardhanam, Devaki Paramanandam, Krishnam Vande Jagadgurum",
		  translation: "I bow to Krishna, the son of Vasudeva, the destroyer of Kamsa and Chanura, and the supreme joy of Devaki, the teacher of the universe."
		},
		"2025-01-25": {
		  quote: "A gift given with pure intentions, at the right time and place, to one in need, is the finest form of giving.",
		  source: "Bhagavad Gita, 17:20"
		},
		"2025-01-26": {
		  quote: "Those who see Me in all things and all things in Me are never separated from Me, nor am I separated from them.",
		  source: "Bhagavad Gita, 6:30"
		},
		"2025-01-27": {
		  quote: "Peace comes to those who let go of all desires and live free from longing, without ego and selfishness.",
		  source: "Bhagavad Gita, 2:71"
		},
		"2025-01-28": {
		  quote: "Govind Jai Jai, Gopal Jai Jai",
		  translation: "Glory to Govind (Krishna), glory to Gopal (Krishna as a protector of cows)."
		},
		"2025-01-29": {
		  quote: "One who performs their duty without attachment, surrendering the results to God, is truly free.",
		  source: "Bhagavad Gita, 5:10"
		},
		"2025-01-30": {
		  quote: "Sri Ramachandra Kripalu Bhajman, Haran Bhav Bhaya Darunam",
		  translation: "O Mind, worship the compassionate Lord Ram, who removes the fears of worldly existence."
		},
		"2025-01-31": {
		  quote: "A promise must never be broken, even at the cost of one’s life.",
		  source: "Valmiki Ramayana"
		},
		"2025-02-01": {
		  quote: "The mind is restless and difficult to control, but it can be conquered through practice and detachment.",
		  source: "Bhagavad Gita, 6:35"
		},
		"2025-02-02": {
		  quote: "Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada",
		  translation: "O Lord with a curved trunk and immense body, radiating light equal to a million suns, remove all obstacles from my endeavors, always."
		},
		"2025-02-03": {
		  quote: "Knowledge destroys ignorance, just as a light destroys darkness.",
		  source: "Bhagavad Gita, 5:16"
		},
		"2025-02-04": {
		  quote: "When a person rises above attachments and desires, they attain the eternal peace of liberation.",
		  source: "Bhagavad Gita, 2:71"
		},
		"2025-02-05": {
		  quote: "A person who is not disturbed by success or failure and is free from attachment is dear to me.",
		  source: "Bhagavad Gita, 12:17"
		},
		"2025-02-06": {
		  quote: "True happiness comes from within, not from external possessions.",
		  source: "Upanishads"
		},
		"2025-02-07": {
		  quote: "Om Namah Shivaya",
		  translation: "I bow to Lord Shiva, the embodiment of consciousness and bliss."
		},
		"2025-02-08": {
		  quote: "The disciplined soul, who moves among objects without attachment, attains peace.",
		  source: "Bhagavad Gita, 2:64"
		},
		"2025-02-09": {
		  quote: "Jai Ganesh Jai Ganesh Deva",
		  translation: "Victory to Lord Ganesha, the divine remover of obstacles."
		},
		"2025-02-10": {
		  quote: "Contentment is the greatest wealth.",
		  source: "Yoga Vasistha"
		},
		"2025-02-11": {
		  quote: "The best way to find yourself is to lose yourself in the service of others.",
		  source: "Teachings of Mahatma Gandhi"
		},
		"2025-02-12": {
		  quote: "The light of God shines in the heart of every being.",
		  source: "Upanishads"
		},
		"2025-02-13": {
		  quote: "Har Har Mahadev",
		  translation: "Hail Lord Shiva, the great god of transformation."
		},
		"2025-02-14": {
		  quote: "One who sees all beings as equal, in pleasure and pain, is truly wise.",
		  source: "Bhagavad Gita, 6:32"
		},
		"2025-02-15": {
			quote: "Shiva is the time and beyond time. He is the stillness in the chaos.",
			source: "Shaivism Philosophy"
		},
		"2025-02-16": {
			quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat",
			translation: "We meditate on Lord Shiva, who nourishes and nurtures all beings. May He free us from the bondage of worldly attachments and liberate us."
		},
		"2025-02-17": {
			quote: "When the mind becomes calm, Shiva reveals Himself as the eternal truth.",
			source: "Shaivism Philosophy"
		},
		"2025-02-18": {
			quote: "Namo Namo Bhavani Shankara",
			translation: "Salutations to Lord Shiva and Goddess Parvati, the source of the universe."
		},
		"2025-02-19": {
			quote: "Om Namah Shivaya",
			translation: "I bow to Lord Shiva, the eternal and infinite consciousness."
		},
		"2025-02-20": {
			quote: "Meditate on Lord Shiva, for He is the destroyer of ignorance and the bringer of liberation.",
			source: "Shiva Purana"
		},
		"2025-02-21": {
			quote: "Har Har Mahadev",
			translation: "Hail Mahadev, the lord of all lords."
		},
		"2025-02-22": {
			quote: "Do your duty without attachment, and you will enjoy blissful peace.",
			source: "Bhagavad Gita, 3:19"
		},
		"2025-02-23": {
			quote: "The flame of dharma burns brighter than any adversity.",
			source: "Teachings of Prahlad"
		},
		"2025-02-24": {
			quote: "When truth guides your actions, fear has no place.",
			source: "Holika Dahan Story"
		},
		"2025-02-25": {
			quote: "Faith in the divine transforms the impossible into reality.",
			source: "Prahlad's Devotion"
		},
		"2025-02-26": {
			quote: "True courage is standing for dharma even in the face of adversity.",
			source: "Holika Dahan Theme"
		},
		"2025-02-27": {
			quote: "Unity in diversity is the true essence of life.",
			source: "Holi Reflection"
		},
		"2025-02-28": {
			quote: "Love and forgiveness are the colors of divine harmony.",
			source: "Holi Teachings"
		},
			"2025-03-01": {
				quote: "Do your duty without attachment, and you will enjoy blissful peace.",
				source: "Bhagavad Gita, 3:19"
			},
			"2025-03-02": {
				quote: "The flame of dharma burns brighter than any adversity.",
				source: "Teachings of Prahlad"
			},
			"2025-03-03": {
				quote: "When truth guides your actions, fear has no place.",
				source: "Holika Dahan Story"
			},
			"2025-03-04": {
				quote: "Faith in the divine transforms the impossible into reality.",
				source: "Prahlad's Devotion"
			},
			"2025-03-05": {
				quote: "True courage is standing for dharma even in the face of adversity.",
				source: "Holika Dahan Theme"
			},
			"2025-03-06": {
				quote: "Unity in diversity is the true essence of life.",
				source: "Holi Reflection"
			},
			"2025-03-07": {
				quote: "Love and forgiveness are the colors of divine harmony.",
				source: "Holi Teachings"
			},
			"2025-03-08": {
				quote: "Celebrate the triumph of faith over fear.",
				source: "Holi Wisdom"
			},
			"2025-03-09": {
				quote: "Happiness multiplies when shared with others.",
				source: "Holi Spirit"
			},
			"2025-03-10": {
				quote: "Let the colors of Holi remind us of life\u2019s vibrancy and unity.",
				source: "Holi Celebration"
			},
			"2025-03-11": {
				quote: "Faith in God brings light even in the darkest times.",
				source: "Holika Dahan Story"
			},
			"2025-03-12": {
				quote: "The victory of devotion over arrogance is the true lesson of Holi.",
				source: "Prahlad's Story"
			},
			"2025-03-13": {
				quote: "Burn away negativity, and let positivity thrive.",
				source: "Holika Dahan Message"
			},
			"2025-03-14": {
				quote: "Faith in the divine is a fire that even the fiercest flames cannot burn.",
				source: "Holika Dahan Reflection"
			},
			"2025-03-15": {
				quote: "Let the colors of love and joy flow, and unity reign.",
				source: "Holi Celebration Theme"
			},
			"2025-03-16": {
				quote: "Playfulness and love bring harmony to life.",
				source: "Krishna's Teachings on Holi"
			},
			"2025-03-17": {
				quote: "Faith and resilience turn every challenge into an opportunity.",
				source: "Holi Teachings"
			},
			"2025-03-18": {
				quote: "The joy of Holi is in spreading happiness and togetherness.",
				source: "Holi Reflection"
			},
			"2025-03-19": {
				quote: "Celebrate every moment as a divine blessing.",
				source: "Holi Message"
			},
			"2025-03-20": {
				quote: "Holi teaches us to embrace differences and celebrate unity.",
				source: "Holi Wisdom"
			},
			"2025-03-21": {
				quote: "Love and devotion are the greatest offerings to God.",
				source: "Krishna's Teachings"
			},
			"2025-03-22": {
				quote: "Forgiveness is the essence of divine love.",
				source: "Holi Message"
			},
			"2025-03-23": {
				quote: "True happiness lies in the joy of others.",
				source: "Holi Reflection"
			},
			"2025-03-24": {
				quote: "Faith in God turns even the smallest moments into miracles.",
				source: "Teachings of Prahlad"
			},
			"2025-03-25": {
				quote: "Compassion and understanding are the colors of a peaceful life.",
				source: "Holi Wisdom"
			},
			"2025-03-26": {
				quote: "In unity, there is strength and harmony.",
				source: "Holi Reflection"
			},
			"2025-03-27": {
				quote: "Let the spirit of Holi bring joy and renewal to your soul.",
				source: "Holi Teachings"
			},
			"2025-03-28": {
				quote: "Kindness and love are the true victories of life.",
				source: "Holi Message"
			},
			"2025-03-29": {
				quote: "Celebrate life with gratitude and joy.",
				source: "Holi Wisdom"
			},
			"2025-03-30": {
				quote: "Holi reminds us that love and faith conquer all.",
				"source": "Holi Reflection"
			},
			"2025-03-31": {
				quote: "Every color of Holi reflects the divine in life\u2019s diversity.",
				source: "Holi Message"
			},
				"2025-04-01": {
					quote: "Navratri is the celebration of Shakti, the divine feminine energy, which destroys negativity and nurtures life.",
					source: "Navratri Wisdom"
				},
				"2025-04-02": {
					quote: "Ya Devi Sarva Bhuteshu Shakti Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
					translation: "To the Divine Goddess who resides in all beings as power, we bow to you again and again."
				},
				"2025-04-03": {
					quote: "Goddess Durga embodies courage, wisdom, and compassion. Seek her blessings for inner strength.",
					source: "Durga Saptashati"
				},
				"2025-04-04": {
					quote: "True devotion is offering your heart, not just your prayers.",
					source: "Navratri Teachings"
				},
				"2025-04-05": {
					quote: "Durge Durge Rakshaniyam",
					translation: "O Durga, O protector, grant us your divine grace."
				},
				"2025-04-06": {
					quote: "Victory is certain when faith is your armor and devotion your shield.",
					source: "Navratri Wisdom"
				},
				"2025-04-07": {
					quote: "Jai Shri Ram",
					translation: "Victory to Lord Ram."
				},
				"2025-04-08": {
					quote: "Sarva Mangala Mangalye Shive Sarvartha Sadhike, Sharanye Tryambake Gauri Narayani Namostute",
					translation: "O Goddess who is the auspicious among the auspicious, who fulfills all objectives, we surrender to you."
				},
				"2025-04-09": {
					quote: "True strength is the courage to serve selflessly.",
					source: "Teachings of Hanuman"
				},
				"2025-04-10": {
					quote: "Bajrang Bali Ki Jai",
					translation: "Victory to Hanuman, the mighty protector."
				},
				"2025-04-11": {
					quote: "Even impossible tasks become achievable with faith and determination.",
					source: "Ramayana"
				},
				"2025-04-12": {
					quote: "Manojavam Marutatulyavegam, Jitendriyam Buddhimatam Varistham, Vatatmajam Vanarayuthamukhyam, Shree Ramdootam Sharanam Prapadye",
					translation: "I surrender to Hanuman, the messenger of Lord Rama, who is swift as the mind, strong as the wind, master of the senses, and chief of the Vanaras."
				},
				"2025-04-13": {
					quote: "A humble heart is stronger than the mightiest weapon.",
					source: "Hanuman's Teachings"
				},
				"2025-04-14": {
					quote: "Jai Hanuman Gyan Gun Sagar, Jai Kapis Tihun Lok Ujagar",
					translation: "Victory to Hanuman, the ocean of wisdom and virtue, who illuminates the three worlds."
				},
				"2025-04-15": {
					quote: "The greatest devotion is to serve others without expectation.",
					source: "Teachings of Hanuman"
				},
				"2025-04-16": {
					quote: "Knowledge shines like a light, dispelling the darkness of ignorance.",
					source: "Bhagavad Gita, 5:16"
				},
				"2025-04-17": {
					quote: "Vasudeva Kutumbakam",
					translation: "The whole world is one family."
				},
				"2025-04-18": {
					quote: "A disciplined mind brings unshakable peace.",
					source: "Bhagavad Gita, 6:15"
				},
				"2025-04-19": {
					quote: "Dharma sustains the world; it is the foundation of all virtues.",
					source: "Mahabharata"
				},
				"2025-04-20": {
					quote: "Om Shri Mahalakshmyai Namah",
					translation: "Salutations to Goddess Lakshmi, the provider of wealth and prosperity."
				},
				"2025-04-21": {
					quote: "Wisdom is the greatest treasure; it multiplies when shared.",
					source: "Upanishads"
				},
				"2025-04-22": {
					quote: "Forgiveness is the greatest strength, for it heals the giver and the receiver.",
					source: "Ramayana"
				},
				"2025-04-23": {
					quote: "Live in harmony with all beings, for the divine resides in all.",
					source: "Upanishads"
				},
				"2025-04-24": {
					quote: "Patience and perseverance can overcome even the greatest challenges.",
					source: "Teachings of Krishna"
				},
				"2025-04-25": {
					quote: "Shree Krishna Govind Hare Murari",
					translation: "Glory to Lord Krishna, Narayan, and Vasudeva, the eternal Lord of all."
				},
				"2025-04-26": {
					quote: "The highest virtue is to uplift others selflessly.",
					source: "Bhagavad Gita"
				},
				"2025-04-27": {
					quote: "True freedom is living without fear and attachment.",
					source: "Upanishads"
				},
				"2025-04-28": {
					quote: "Om Shri Durgayai Namah",
					translation: "I bow to Goddess Durga, the remover of miseries."
				},
				"2025-04-29": {
					quote: "The divine mother protects all who surrender to her.",
					source: "Navratri Theme"
				},
				"2025-04-30": {
					quote: "Faith in God brings clarity to the mind and courage to the soul.",
					source: "Teachings of Hanuman"
				},
					"2025-05-01": {
						quote: "True devotion is offering your heart, not just your prayers.",
						source: "Upanishads"
					},
					"2025-05-02": {
						quote: "The greatest wealth is contentment.",
						source: "Yoga Vasistha"
					},
					"2025-05-03": {
						quote: "Om Shri Mahalakshmyai Namah",
						translation: "Salutations to Goddess Lakshmi, the provider of wealth and prosperity."
					},
					"2025-05-04": {
						quote: "Meditation brings clarity to the mind and peace to the soul.",
						source: "Yoga Philosophy"
					},
					"2025-05-05": {
						quote: "A person with a disciplined mind and calm soul is truly free.",
						source: "Bhagavad Gita, 6:7"
					},
					"2025-05-06": {
						quote: "Forgiveness is the ornament of the strong.",
						source: "Teachings of Krishna"
					},
					"2025-05-07": {
						quote: "Om Namo Narayanaya",
						translation: "I bow to Lord Narayana, the sustainer of all."
					},
					"2025-05-08": {
						quote: "Even a small act of kindness is cherished by the divine.",
						source: "Bhagavad Gita, 9:26"
					},
					"2025-05-09": {
						quote: "Peace comes to those who let go of attachments and desires.",
						source: "Bhagavad Gita, 2:71"
					},
					"2025-05-10": {
						quote: "True strength lies in humility and compassion.",
						source: "Ramayana"
					},
					"2025-05-11": {
						quote: "Service to others is the highest form of worship.",
						source: "Teachings of Krishna"
					},
					"2025-05-12": {
						quote: "Om Dum Durgaye Namah",
						translation: "Salutations to Goddess Durga, the remover of miseries."
					},
					"2025-05-13": {
						quote: "Knowledge is the light that dispels the darkness of ignorance.",
						source: "Upanishads"
					},
					"2025-05-14": {
						quote: "Faith in God transforms fear into courage.",
						source: "Teachings of Hanuman"
					},
					"2025-05-15": {
						quote: "Om Gan Ganapataye Namah",
						translation: "Salutations to Lord Ganesha, the remover of obstacles."
					},
					"2025-05-16": {
						quote: "True happiness lies in selflessness and love.",
						source: "Teachings of Krishna"
					},
					"2025-05-17": {
						quote: "The divine resides in all beings; honor and respect everyone.",
						source: "Vedic Teachings"
					},
					"2025-05-18": {
						quote: "Om Namah Shivaya",
						translation: "I bow to Lord Shiva, the eternal consciousness."
					},
					"2025-05-19": {
						quote: "A disciplined soul moves among objects without attachment and attains peace.",
						source: "Bhagavad Gita, 2:64"
					},
					"2025-05-20": {
						quote: "The divine light shines brightest in the hearts of the humble.",
						source: "Bhagavad Gita"
					},
					"2025-05-21": {
						quote: "Shree Krishna Govind Hare Murari",
						translation: "Glory to Lord Krishna, the remover of miseries."
					},
					"2025-05-22": {
						quote: "A calm and steady mind is the foundation of inner peace.",
						source: "Bhagavad Gita, 6:7"
					},
					"2025-05-23": {
						quote: "Om Aim Saraswatyai Namah",
						translation: "I bow to Goddess Saraswati, the bestower of wisdom."
					},
					"2025-05-24": {
						quote: "Even the smallest offering made with love reaches the divine.",
						source: "Bhagavad Gita, 9:26"
					},
					"2025-05-25": {
						quote: "Contentment is the greatest form of wealth.",
						source: "Yoga Vasistha"
					},
					"2025-05-26": {
						quote: "Patience and perseverance can overcome even the greatest challenges.",
						source: "Teachings of Krishna"
					},
					"2025-05-27": {
						quote: "Forgiveness is the greatest virtue, for it purifies the soul.",
						source: "Ramayana"
					},
					"2025-05-28": {
						quote: "The divine mother protects all who surrender to her.",
						source: "Navratri Theme"
					},
					"2025-05-29": {
						quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
						translation: "We meditate on Lord Shiva, who nourishes all beings and liberates us from bondage."
					},
					"2025-05-30": {
						quote: "Faith in the divine brings clarity and courage.",
						source: "Teachings of Hanuman"
					},
					"2025-05-31": {
						quote: "Meditate on the divine within, for it is the source of all power.",
						source: "Upanishads"
					},
					"2025-06-01": {
						quote: "True freedom is living without fear or attachment.",
						source: "Upanishads"
					},
					"2025-06-02": {
						quote: "Om Shri Durgayai Namah",
						translation: "I bow to Goddess Durga, the remover of miseries."
					},
					"2025-06-03": {
						quote: "The greatest offering to God is a pure and humble heart.",
						source: "Teachings of Krishna"
					},
					"2025-06-04": {
						quote: "The path of dharma is the path of peace and fulfillment.",
						source: "Mahabharata"
					},
					"2025-06-05": {
						quote: "Faith in the divine turns obstacles into stepping stones.",
						source: "Teachings of Hanuman"
					},
					"2025-06-06": {
						quote: "Om Gan Ganapataye Namah",
						translation: "Salutations to Lord Ganesha, the remover of obstacles."
					},
					"2025-06-07": {
						quote: "Contentment is the foundation of lasting happiness.",
						source: "Yoga Vasistha"
					},
					"2025-06-08": {
						quote: "A disciplined mind leads to clarity and inner peace.",
						source: "Bhagavad Gita, 6:15"
					},
					"2025-06-09": {
						quote: "Meditation connects the soul to the divine.",
						source: "Upanishads"
					},
					"2025-06-10": {
						quote: "Jai Hanuman Gyan Gun Sagar",
						translation: "Victory to Hanuman, the ocean of wisdom and virtue."
					},
					"2025-06-11": {
						quote: "Forgiveness is the highest virtue; it liberates both the giver and receiver.",
						source: "Ramayana"
					},
					"2025-06-12": {
						quote: "Patience and perseverance overcome even the greatest challenges.",
						source: "Bhagavad Gita"
					},
					"2025-06-13": {
						quote: "Om Namo Narayanaya",
						translation: "I bow to Lord Narayana, the sustainer of all."
					},
					"2025-06-14": {
						quote: "The light of wisdom dispels the darkness of ignorance.",
						source: "Upanishads"
					},
					"2025-06-15": {
						quote: "Unity and love are the essence of dharma.",
						source: "Mahabharata"
					},
					"2025-06-16": {
						quote: "Even the smallest act of kindness is cherished by the divine.",
						source: "Bhagavad Gita, 9:26"
					},
					"2025-06-17": {
						quote: "Om Namah Shivaya",
						translation: "I bow to Lord Shiva, the eternal consciousness."
					},
					"2025-06-18": {
						quote: "Happiness comes from within, not from external possessions.",
						source: "Yoga Philosophy"
					},
					"2025-06-19": {
						quote: "Shree Krishna Govind Hare Murari",
						translation: "Glory to Lord Krishna, the remover of miseries."
					},
					"2025-06-20": {
						quote: "True devotion is serving others selflessly.",
						source: "Teachings of Krishna"
					},
					"2025-06-21": {
						quote: "Om Dum Durgaye Namah",
						translation: "Salutations to Goddess Durga, the remover of miseries."
					},
					"2025-06-22": {
						quote: "A pure heart is the greatest offering to God.",
						source: "Bhagavad Gita"
					},
					"2025-06-23": {
						quote: "The divine resides in all beings; honor and respect everyone.",
						source: "Vedic Teachings"
					},
					"2025-06-24": {
						quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
						translation: "We meditate on Lord Shiva, who nourishes all beings and liberates us from bondage."
					},
					"2025-06-25": {
						quote: "Faith transforms fear into courage and obstacles into opportunities.",
						source: "Teachings of Hanuman"
					},
					"2025-06-26": {
						quote: "The joy of giving is the truest form of happiness.",
						source: "Bhagavad Gita"
					},
					"2025-06-27": {
						quote: "Peace comes to those who let go of ego and selfish desires.",
						source: "Bhagavad Gita, 2:71"
					},
					"2025-06-28": {
						quote: "Knowledge is the greatest wealth a person can possess.",
						source: "Upanishads"
					},
					"2025-06-29": {
						quote: "Om Aim Saraswatyai Namah",
						translation: "I bow to Goddess Saraswati, the bestower of wisdom."
					},
					"2025-06-30": {
						quote: "Even the smallest prayer offered with love reaches the divine.",
						source: "Bhagavad Gita, 9:26"
					},
					
						"2025-07-01": {
							quote: "Om Shri Mahalakshmyai Namah",
							translation: "Salutations to Goddess Lakshmi, the provider of prosperity."
						},
						"2025-07-02": {
							quote: "Faith in the divine leads to clarity and strength.",
							source: "Bhagavad Gita"
						},
						"2025-07-03": {
							quote: "Patience and forgiveness are the virtues of the strong.",
							source: "Ramayana"
						},
						"2025-07-04": {
							quote: "Om Namo Narayanaya",
							translation: "I bow to Lord Narayana, the preserver of the universe."
						},
						"2025-07-05": {
							quote: "True happiness lies in serving others selflessly.",
							source: "Teachings of Krishna"
						},
						"2025-07-06": {
							quote: "Om Gan Ganapataye Namah",
							translation: "Salutations to Lord Ganesha, the remover of obstacles."
						},
						"2025-07-07": {
							quote: "Wisdom is the greatest wealth; it guides all virtues.",
							source: "Upanishads"
						},
						"2025-07-08": {
							quote: "Meditation is the path to self-realization.",
							source: "Yoga Philosophy"
						},
						"2025-07-09": {
							quote: "Om Namah Shivaya",
							translation: "I bow to Lord Shiva, the eternal consciousness."
						},
						"2025-07-10": {
							quote: "Forgiveness purifies the heart and strengthens the soul.",
							source: "Ramayana"
						},
						"2025-07-11": {
							quote: "Even the smallest act of love pleases the divine.",
							source: "Bhagavad Gita, 9:26"
						},
						"2025-07-12": {
							quote: "Om Aim Saraswatyai Namah",
							translation: "I bow to Goddess Saraswati, the bestower of knowledge."
						},
						"2025-07-13": {
							quote: "The disciplined mind attains unshakable peace.",
							source: "Bhagavad Gita, 6:15"
						},
						"2025-07-14": {
							quote: "Om Dum Durgaye Namah",
							translation: "Salutations to Goddess Durga, the protector."
						},
						"2025-07-15": {
							quote: "Faith transforms fear into courage.",
							source: "Teachings of Hanuman"
						},
						"2025-07-16": {
							quote: "Unity in diversity is the essence of dharma.",
							source: "Mahabharata"
						},
						"2025-07-17": {
							quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
							translation: "We meditate on Lord Shiva, who nourishes all beings and liberates us from bondage."
						},
						"2025-07-18": {
							quote: "Service to others is the highest form of worship.",
							source: "Bhagavad Gita"
						},
						"2025-07-19": {
							quote: "Om Shri Durgayai Namah",
							translation: "I bow to Goddess Durga, the remover of miseries."
						},
						"2025-07-20": {
							quote: "Forgiveness is the strength of the virtuous.",
							source: "Ramayana"
						},
						"2025-07-21": {
							quote: "A pure heart is the greatest offering to God.",
							source: "Bhagavad Gita"
						},
						"2025-07-22": {
							quote: "Shree Krishna Govind Hare Murari",
							translation: "Glory to Lord Krishna, the remover of sorrows."
						},
						"2025-07-23": {
							quote: "Meditation connects the soul to the divine.",
							source: "Upanishads"
						},
						"2025-07-24": {
							quote: "Even the smallest prayer made with love reaches the divine.",
							source: "Bhagavad Gita"
						},
						"2025-07-25": {
							quote: "Om Namo Bhagavate Vasudevaya",
							translation: "I bow to Lord Vasudeva, the sustainer of all."
						},
						"2025-07-26": {
							quote: "Compassion and understanding lead to harmony.",
							source: "Teachings of Krishna"
						},
						"2025-07-27": {
							quote: "Om Haraye Namah",
							translation: "Salutations to Lord Vishnu, the remover of miseries."
						},
						"2025-07-28": {
							quote: "Peace comes to those who let go of ego and attachments.",
							source: "Bhagavad Gita, 2:71"
						},
						"2025-07-29": {
							quote: "True strength lies in humility and love.",
							source: "Ramayana"
						},
						"2025-07-30": {
							quote: "The light of wisdom dispels the darkness of ignorance.",
							source: "Upanishads"
						},
						"2025-07-31": {
							quote: "Om Vasudevaya Namah",
							translation: "I bow to Lord Vasudeva, the infinite one."
						},
							"2025-08-01": {
								quote: "Om Shri Mahalakshmyai Namah",
								translation: "Salutations to Goddess Lakshmi, the provider of prosperity."
							},
							"2025-08-02": {
								quote: "True happiness is found in selfless service.",
								source: "Teachings of Krishna"
							},
							"2025-08-03": {
								quote: "Om Gan Ganapataye Namah",
								translation: "Salutations to Lord Ganesha, the remover of obstacles."
							},
							"2025-08-04": {
								quote: "Faith in God transforms fear into courage.",
								source: "Teachings of Hanuman"
							},
							"2025-08-05": {
								quote: "Forgiveness is the ornament of the strong.",
								source: "Ramayana"
							},
							"2025-08-06": {
								quote: "Om Namah Shivaya",
								translation: "I bow to Lord Shiva, the eternal consciousness."
							},
							"2025-08-07": {
								quote: "Wisdom dispels ignorance like the light removes darkness.",
								source: "Upanishads"
							},
							"2025-08-08": {
								quote: "Om Namo Narayanaya",
								translation: "I bow to Lord Narayana, the preserver of the universe."
							},
							"2025-08-09": {
								quote: "Even the smallest prayer offered with love pleases the divine.",
								source: "Bhagavad Gita, 9:26"
							},
							"2025-08-10": {
								quote: "Patience and perseverance lead to success.",
								source: "Mahabharata"
							},
							"2025-08-11": {
								quote: "Om Aim Saraswatyai Namah",
								translation: "I bow to Goddess Saraswati, the bestower of wisdom."
							},
							"2025-08-12": {
								quote: "Unity in diversity is the essence of life.",
								source: "Vedic Teachings"
							},
							"2025-08-13": {
								quote: "Meditation connects the soul to the divine within.",
								source: "Yoga Philosophy"
							},
							"2025-08-14": {
								quote: "Om Dum Durgaye Namah",
								translation: "Salutations to Goddess Durga, the protector."
							},
							"2025-08-15": {
								quote: "True freedom is freedom from fear and attachment.",
								source: "Upanishads"
							},
							"2025-08-16": {
								quote: "Service to others is the highest form of worship.",
								source: "Teachings of Krishna"
							},
							"2025-08-17": {
								quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
								translation: "We meditate on Lord Shiva, who nourishes and liberates all beings."
							},
							"2025-08-18": {
								quote: "Compassion and understanding are the colors of a peaceful life.",
								source: "Teachings of Krishna"
							},
							"2025-08-19": {
								quote: "Om Vasudevaya Namah",
								translation: "I bow to Lord Vasudeva, the sustainer of all."
							},
							"2025-08-20": {
								quote: "Forgiveness and humility are the greatest strengths.",
								source: "Ramayana"
							},
							"2025-08-21": {
								quote: "Shree Krishna Govind Hare Murari",
								translation: "Glory to Lord Krishna, the remover of miseries."
							},
							"2025-08-22": {
								quote: "A pure heart is the greatest offering to God.",
								source: "Bhagavad Gita"
							},
							"2025-08-23": {
								quote: "Meditation brings clarity and inner peace.",
								source: "Yoga Philosophy"
							},
							"2025-08-24": {
								quote: "Om Haraye Namah",
								translation: "Salutations to Lord Vishnu, the remover of sorrows."
							},
							"2025-08-25": {
								quote: "True happiness lies in the joy of others.",
								source: "Vedic Teachings"
							},
							"2025-08-26": {
								quote: "Om Namo Bhagavate Vasudevaya",
								translation: "I bow to Lord Vasudeva, the eternal guide."
							},
							"2025-08-27": {
								quote: "Kindness and love are the true victories of life.",
								source: "Bhagavad Gita"
							},
							"2025-08-28": {
								quote: "Om Shri Durgayai Namah",
								translation: "I bow to Goddess Durga, the remover of difficulties."
							},
							"2025-08-29": {
								quote: "Faith in the divine brings strength and serenity.",
								source: "Upanishads"
							},
							"2025-08-30": {
								quote: "The light of wisdom guides through the darkest times.",
								source: "Teachings of Krishna"
							},
							"2025-08-31": {
								quote: "Victory is assured when Arjun wields the bow of dharma.",
								source: "Mahabharata"
							},
								"2025-09-01": {
									quote: "Om Gan Ganapataye Namah",
									translation: "Salutations to Lord Ganesha, the remover of obstacles."
								},
								"2025-09-02": {
									quote: "The mind is purified by devotion and service.",
									source: "Bhagavad Gita"
								},
								"2025-09-03": {
									quote: "Om Dum Durgaye Namah",
									translation: "Salutations to Goddess Durga, the protector."
								},
								"2025-09-04": {
									quote: "True peace lies in surrendering to the divine will.",
									source: "Upanishads"
								},
								"2025-09-05": {
									quote: "Shree Krishna Govind Hare Murari",
									translation: "Glory to Lord Krishna, the remover of miseries."
								},
								"2025-09-06": {
									quote: "Unity and harmony are the essence of dharma.",
									source: "Vedic Teachings"
								},
								"2025-09-07": {
									quote: "Om Shri Mahalakshmyai Namah",
									translation: "Salutations to Goddess Lakshmi, the bestower of prosperity."
								},
								"2025-09-08": {
									quote: "Faith transforms challenges into opportunities.",
									source: "Teachings of Krishna"
								},
								"2025-09-09": {
									quote: "Om Aim Saraswatyai Namah",
									translation: "I bow to Goddess Saraswati, the giver of wisdom."
								},
								"2025-09-10": {
									quote: "A disciplined mind leads to unshakable peace.",
									source: "Bhagavad Gita, 6:15"
								},
								"2025-09-11": {
									quote: "Om Namah Shivaya",
									translation: "I bow to Lord Shiva, the eternal consciousness."
								},
								"2025-09-12": {
									quote: "Forgiveness is the strength of the virtuous.",
									source: "Ramayana"
								},
								"2025-09-13": {
									quote: "Meditation connects the soul to the divine within.",
									source: "Yoga Philosophy"
								},
								"2025-09-14": {
									quote: "Om Namo Narayanaya",
									translation: "I bow to Lord Narayana, the preserver of the universe."
								},
								"2025-09-15": {
									quote: "Even the smallest prayer made with love reaches the divine.",
									source: "Bhagavad Gita, 9:26"
								},
								"2025-09-16": {
									quote: "Compassion and understanding lead to true happiness.",
									source: "Teachings of Krishna"
								},
								"2025-09-17": {
									quote: "Om Vasudevaya Namah",
									translation: "I bow to Lord Vasudeva, the sustainer of all."
								},
								"2025-09-18": {
									quote: "Kindness is the essence of a divine life.",
									source: "Upanishads"
								},
								"2025-09-19": {
									quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
									translation: "We meditate on Lord Shiva, who nourishes and liberates all beings."
								},
								"2025-09-20": {
									quote: "Patience and perseverance overcome all challenges.",
									source: "Ramayana"
								},
								"2025-09-21": {
									quote: "The divine mother protects all who seek her blessings.",
									source: "Navratri Teachings"
								},
								"2025-09-22": {
									quote: "Om Shri Durgayai Namah",
									translation: "Salutations to Goddess Durga, the remover of difficulties."
								},
								"2025-09-23": {
									quote: "A humble heart is a beacon of divine light.",
									source: "Teachings of Krishna"
								},
								"2025-09-24": {
									quote: "Om Haraye Namah",
									translation: "Salutations to Lord Vishnu, the remover of sorrows."
								},
								"2025-09-25": {
									quote: "Faith in God brings peace and fulfillment.",
									source: "Bhagavad Gita"
								},
								"2025-09-26": {
									quote: "Om Namo Bhagavate Vasudevaya",
									translation: "I bow to Lord Vasudeva, the eternal guide."
								},
								"2025-09-27": {
									quote: "Wisdom is the light that dispels ignorance.",
									source: "Upanishads"
								},
								"2025-09-28": {
									quote: "True devotion lies in selfless service.",
									source: "Bhagavad Gita"
								},
								"2025-09-29": {
									quote: "The divine resides in all beings; respect and honor everyone.",
									source: "Vedic Teachings"
								},
								"2025-09-30": {
									quote: "Ya Devi Sarva Bhuteshu Shakti Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
									translation: "To the Divine Goddess who resides in all beings as power, we bow to you again and again."
								},
							
								
									"2025-10-01": {
										quote: "Om Dum Durgaye Namah",
										translation: "Salutations to Goddess Durga, the remover of miseries."
									},
									"2025-10-02": {
										quote: "Faith in the divine destroys fear and nurtures strength.",
										source: "Upanishads"
									},
									"2025-10-03": {
										quote: "Om Shri Mahalakshmyai Namah",
										translation: "Salutations to Goddess Lakshmi, the bestower of abundance."
									},
									"2025-10-04": {
										quote: "Victory is certain when faith and dharma guide your actions.",
										source: "Ramayana"
									},
									"2025-10-05": {
										quote: "Om Aim Saraswatyai Namah",
										translation: "I bow to Goddess Saraswati, the bestower of knowledge and wisdom."
									},
									"2025-10-06": {
										quote: "True happiness lies in the joy of others.",
										source: "Teachings of Krishna"
									},
									"2025-10-07": {
										quote: "Om Gan Ganapataye Namah",
										translation: "Salutations to Lord Ganesha, the remover of obstacles."
									},
									"2025-10-08": {
										quote: "Wisdom dispels ignorance as the sun dispels darkness.",
										source: "Upanishads"
									},
									"2025-10-09": {
										quote: "Om Namah Shivaya",
										translation: "I bow to Lord Shiva, the eternal and infinite consciousness."
									},
									"2025-10-10": {
										quote: "Patience and perseverance overcome even the greatest challenges.",
										source: "Bhagavad Gita"
									},
									"2025-10-11": {
										quote: "Om Namo Narayanaya",
										translation: "I bow to Lord Narayana, the preserver of the universe."
									},
									"2025-10-12": {
										quote: "Forgiveness is the strength of the virtuous and the wise.",
										source: "Ramayana"
									},
									"2025-10-13": {
										quote: "Meditation connects the soul to the eternal divine.",
										source: "Yoga Philosophy"
									},
									"2025-10-14": {
										quote: "Om Vasudevaya Namah",
										translation: "I bow to Lord Vasudeva, the sustainer of all."
									},
									"2025-10-15": {
										quote: "Shree Krishna Govind Hare Murari",
										translation: "Glory to Lord Krishna, the remover of miseries."
									},
									"2025-10-16": {
										quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
										translation: "We meditate on Lord Shiva, who nourishes and liberates all beings."
									},
									"2025-10-17": {
										quote: "Faith in God brings peace and fulfillment.",
										source: "Bhagavad Gita"
									},
									"2025-10-18": {
										quote: "Om Haraye Namah",
										translation: "Salutations to Lord Vishnu, the remover of sorrows."
									},
									"2025-10-19": {
										quote: "True devotion is found in selfless service to others.",
										source: "Bhagavad Gita"
									},
									"2025-10-20": {
										quote: "Om Shri Durgayai Namah",
										translation: "I bow to Goddess Durga, the divine protector."
									},
									"2025-10-21": {
										quote: "Unity and harmony are the essence of dharma.",
										source: "Mahabharata"
									},
									"2025-10-22": {
										quote: "Om Namo Bhagavate Vasudevaya",
										translation: "I bow to Lord Vasudeva, the eternal guide."
									},
									"2025-10-23": {
										quote: "Wisdom is the light that dispels the darkness of ignorance.",
										source: "Upanishads"
									},
									"2025-10-24": {
										quote: "A pure heart is the greatest offering to the divine.",
										source: "Bhagavad Gita"
									},
									"2025-10-25": {
										quote: "Ya Devi Sarva Bhuteshu Shakti Rupena Samsthita, Namastasyai Namastasyai Namastasyai Namo Namah",
										translation: "To the Divine Goddess who resides in all beings as power, we bow to you again and again."
									},
									"2025-10-26": {
										quote: "Om Dum Durgaye Namah",
										translation: "Salutations to Goddess Durga, the remover of obstacles."
									},
									"2025-10-27": {
										quote: "The joy of giving is the truest form of happiness.",
										source: "Bhagavad Gita"
									},
									"2025-10-28": {
										quote: "Peace comes to those who surrender ego and attachment.",
										source: "Bhagavad Gita, 2:71"
									},
									"2025-10-29": {
										quote: "Kindness and love are the true victories of life.",
										source: "Teachings of Krishna"
									},
									"2025-10-30": {
										quote: "Deepo Jyotir Parabrahma",
										translation: "The light of the lamp is the Supreme Brahman."
									},
									"2025-10-31": {
										quote: "Om Deepjyoti Namostute",
										translation: "I bow to the divine light that illuminates the universe."
									},
							
															
									
										"2025-11-01": {
											quote: "Om Shri Mahalakshmyai Namah",
											translation: "Salutations to Goddess Lakshmi, the provider of prosperity."
										},
										"2025-11-02": {
											quote: "True happiness lies in selfless service.",
											source: "Bhagavad Gita"
										},
										"2025-11-03": {
											quote: "Om Gan Ganapataye Namah",
											translation: "Salutations to Lord Ganesha, the remover of obstacles."
										},
										"2025-11-04": {
											quote: "Patience and forgiveness are the virtues of the strong.",
											source: "Ramayana"
										},
										"2025-11-05": {
											quote: "Om Aim Saraswatyai Namah",
											translation: "I bow to Goddess Saraswati, the bestower of wisdom."
										},
										"2025-11-06": {
											quote: "Meditation brings clarity to the mind and peace to the soul.",
											source: "Yoga Philosophy"
										},
										"2025-11-07": {
											quote: "Om Namah Shivaya",
											translation: "I bow to Lord Shiva, the eternal consciousness."
										},
										"2025-11-08": {
											quote: "Faith transforms fear into courage.",
											source: "Teachings of Hanuman"
										},
										"2025-11-09": {
											quote: "Om Namo Narayanaya",
											translation: "I bow to Lord Narayana, the preserver of the universe."
										},
										"2025-11-10": {
											quote: "Unity in diversity is the essence of dharma.",
											source: "Vedic Teachings"
										},
										"2025-11-11": {
											quote: "Om Vasudevaya Namah",
											translation: "I bow to Lord Vasudeva, the sustainer of all."
										},
										"2025-11-12": {
											quote: "The light of wisdom dispels the darkness of ignorance.",
											source: "Upanishads"
										},
										"2025-11-13": {
											quote: "Om Dum Durgaye Namah",
											translation: "Salutations to Goddess Durga, the remover of miseries."
										},
										"2025-11-14": {
											quote: "True devotion lies in serving others selflessly.",
											source: "Bhagavad Gita"
										},
										"2025-11-15": {
											quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
											translation: "We meditate on Lord Shiva, who nourishes and liberates all beings."
										},
										"2025-11-16": {
											quote: "Shree Krishna Govind Hare Murari",
											translation: "Glory to Lord Krishna, the remover of miseries."
										},
										"2025-11-17": {
											quote: "Om Haraye Namah",
											translation: "Salutations to Lord Vishnu, the remover of sorrows."
										},
										"2025-11-18": {
											quote: "Forgiveness and humility are the true strengths of the virtuous.",
											source: "Ramayana"
										},
										"2025-11-19": {
											quote: "Om Namo Bhagavate Vasudevaya",
											translation: "I bow to Lord Vasudeva, the eternal guide."
										},
										"2025-11-20": {
											quote: "Compassion and understanding lead to inner peace.",
											source: "Teachings of Krishna"
										},
										"2025-11-21": {
											quote: "Om Shri Durgayai Namah",
											translation: "I bow to Goddess Durga, the remover of obstacles."
										},
										"2025-11-22": {
											quote: "Faith in God brings clarity and courage.",
											source: "Bhagavad Gita"
										},
										"2025-11-23": {
											quote: "Patience and perseverance overcome even the greatest challenges.",
											source: "Bhagavad Gita"
										},
										"2025-11-24": {
											quote: "Om Deepjyoti Namostute",
											translation: "I bow to the divine light that illuminates the universe."
										},
										"2025-11-25": {
											quote: "Peace comes to those who let go of ego and attachment.",
											source: "Bhagavad Gita, 2:71"
										},
										"2025-11-26": {
											quote: "Om Aim Saraswatyai Namah",
											translation: "I bow to Goddess Saraswati, the giver of wisdom."
										},
										"2025-11-27": {
											quote: "True happiness comes from within, not from external possessions.",
											source: "Upanishads"
										},
										"2025-11-28": {
											quote: "Om Gan Ganapataye Namah",
											translation: "Salutations to Lord Ganesha, the remover of obstacles."
										},
										"2025-11-29": {
											quote: "Faith transforms challenges into opportunities.",
											source: "Teachings of Krishna"
										},
										"2025-11-30": {
											quote: "Kindness and love are the greatest virtues of life.",
											source: "Bhagavad Gita"
										},
									
											"2025-12-01": {
												quote: "Om Shri Mahalakshmyai Namah",
												translation: "Salutations to Goddess Lakshmi, the provider of abundance."
											},
											"2025-12-02": {
												quote: "True happiness is found in serving others selflessly.",
												source: "Bhagavad Gita"
											},
											"2025-12-03": {
												quote: "Om Gan Ganapataye Namah",
												translation: "Salutations to Lord Ganesha, the remover of obstacles."
											},
											"2025-12-04": {
												quote: "Wisdom is the light that dispels ignorance.",
												source: "Upanishads"
											},
											"2025-12-05": {
												quote: "Om Aim Saraswatyai Namah",
												translation: "I bow to Goddess Saraswati, the bestower of wisdom."
											},
											"2025-12-06": {
												quote: "Faith in God transforms fear into strength.",
												source: "Teachings of Krishna"
											},
											"2025-12-07": {
												quote: "Om Namah Shivaya",
												translation: "I bow to Lord Shiva, the eternal consciousness."
											},
											"2025-12-08": {
												quote: "Patience and perseverance can overcome any obstacle.",
												source: "Ramayana"
											},
											"2025-12-09": {
												quote: "Om Namo Narayanaya",
												translation: "I bow to Lord Narayana, the preserver of the universe."
											},
											"2025-12-10": {
												quote: "Unity in diversity is the true essence of dharma.",
												source: "Vedic Teachings"
											},
											"2025-12-11": {
												quote: "Om Vasudevaya Namah",
												translation: "I bow to Lord Vasudeva, the sustainer of all."
											},
											"2025-12-12": {
												quote: "Compassion and forgiveness are the strengths of the virtuous.",
												source: "Ramayana"
											},
											"2025-12-13": {
												quote: "Om Dum Durgaye Namah",
												translation: "Salutations to Goddess Durga, the protector."
											},
											"2025-12-14": {
												quote: "True devotion lies in a selfless heart.",
												source: "Bhagavad Gita"
											},
											"2025-12-15": {
												quote: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
												translation: "We meditate on Lord Shiva, who nourishes and liberates all beings."
											},
											"2025-12-16": {
												quote: "Shree Krishna Govind Hare Murari",
												translation: "Glory to Lord Krishna, the remover of miseries."
											},
											"2025-12-17": {
												quote: "Om Haraye Namah",
												translation: "Salutations to Lord Vishnu, the remover of sorrows."
											},
											"2025-12-18": {
												quote: "Peace comes to those who surrender their ego and desires.",
												source: "Bhagavad Gita, 2:71"
											},
											"2025-12-19": {
												quote: "Om Namo Bhagavate Vasudevaya",
												translation: "I bow to Lord Vasudeva, the eternal guide."
											},
											"2025-12-20": {
												quote: "Faith in the divine transforms challenges into blessings.",
												source: "Teachings of Krishna"
											},
											"2025-12-21": {
												quote: "Om Shri Durgayai Namah",
												translation: "I bow to Goddess Durga, the remover of obstacles."
											},
											"2025-12-22": {
												quote: "Kindness and understanding bring harmony to life.",
												source: "Upanishads"
											},
											"2025-12-23": {
												quote: "Om Deepjyoti Namostute",
												translation: "I bow to the divine light that illuminates the universe."
											},
											"2025-12-24": {
												quote: "The divine light shines within all beings.",
												source: "Vedic Teachings"
											},
											"2025-12-25": {
												quote: "Om Aim Saraswatyai Namah",
												translation: "I bow to Goddess Saraswati, the bestower of wisdom."
											},
											"2025-12-26": {
												quote: "True freedom is freedom from attachments and fears.",
												source: "Upanishads"
											},
											"2025-12-27": {
												quote: "Om Gan Ganapataye Namah",
												translation: "Salutations to Lord Ganesha, the remover of obstacles."
											},
											"2025-12-28": {
												quote: "The greatest wealth is a content heart.",
												source: "Yoga Vasistha"
											},
											"2025-12-29": {
												quote: "Om Dum Durgaye Namah",
												translation: "Salutations to Goddess Durga, the remover of miseries."
											},
											"2025-12-30": {
												quote: "Faith is the foundation of inner peace.",
												source: "Teachings of Hanuman"
											},
											"2025-12-31": {
												quote: "May the light of wisdom guide your path in the new year.",
												source: "Vedic Blessing"
											}
										
										

									
								
									





										},
										updateInterval: 30000,
										remoteFile: null, // Not needed anymore since we have quotes embedded
										random: false, // Change to true if you want random quotes instead of today's quote
									},
								
									getScripts() {
										return ["moment.js"];
									},
								
									start() {
										Log.info(`Starting module: ${this.name}`);
										this.updateDom();
										setInterval(() => {
											this.updateDom(this.config.fadeSpeed);
										}, this.config.updateInterval);
									},
								
									getRandomCompliment() {
										const now = moment();
										const today = now.format("YYYY-MM-DD");
										let compliment = { quote: "No quote available for today." };
								
										if (this.config.compliments[today]) {
											compliment = this.config.compliments[today];
										}
								
										return compliment;
									},
								
									getDom() {
										const wrapper = document.createElement("div");
										wrapper.className = this.config.classes || "thin xlarge bright pre-line";
								
										const compliment = this.getRandomCompliment();
								
										const quoteElement = document.createElement("div");
										quoteElement.className = "quote";
										quoteElement.innerHTML = compliment.quote || "No quote available.";
										wrapper.appendChild(quoteElement);
								
										if (compliment.source) {
											const sourceElement = document.createElement("div");
											sourceElement.className = "source";
											sourceElement.innerHTML = `Source: ${compliment.source}`;
											wrapper.appendChild(sourceElement);
										}
								
										if (compliment.translation) {
											const translationElement = document.createElement("div");
											translationElement.className = "translation";
											translationElement.innerHTML = `Translation: ${compliment.translation}`;
											wrapper.appendChild(translationElement);
										}
								
										return wrapper;
									},
								});
								