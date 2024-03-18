export const DATABASE_URL = process.env.DATABASE_URL || ''
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''
export const CHAT_PROMPT = `Answer the question asked by customers based on the context below. If the context below is empty DO NOT RESPOND!! Please Say "I'm sorry, I cannot help with that". If there is context provided, Please answer with detail and clarity: \n context: \n`
export const GPT_MODEL = 'gpt-3.5-turbo'
export const GPT_EMBEDDING_MODEL = 'text-embedding-ada-002'
export const EXAMPLES = [
  'Who owns the content?',
  'How to change my password?',
  'Do you offer a discount for nonprofits and educational institutes?',
  'How to add a Pause?',
]
export const TRAINING_DATA = [
  {
    question: 'How does Fliki work?',
    answer:
      'Fliki uses top-of-line AI powered systems to create videos with ultra realistic voice overs in over 75 different languages and 1000 voices.',
  },
  {
    question: 'How to use AI Art?',
    answer:
      'Fliki uses state-of-the-art Text to Image engine to provide you with an image by just describing it with text.',
  },
  {
    question: 'Who owns the content?',
    answer:
      'Publishing rights are owned by the user of the content.\nFliki does not own any content. \nMedia provided in Fliki is either licensed or royalty-free, giving the user of any paid plan commercial rights.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'Unfortunately, we do not have a refund policy. \nWe offer a free version of our product that allows users to try out all our features and continue using the product for free without any obligation to upgrade.\nYou can use the free version as long as you would like.\nOnce you have subscribed to our paid plans, we do not offer refunds. \nThis policy is in place to prevent potential misuse and absue of our services. \nBy maintaining this policy, we can continue to offer our services at an affordable price and invest in improving our platform to benefit all our users.',
  },
  {
    question: 'How to change the format in which subtitles are displayed?',
    answer:
      'You can change the format in which subtitles are displayed in just a few steps.\nClick on "Video Settings" and select your prefered format under "Subtitles Display".\nFollow the link to get a demo of all types of subtitle display: https://fliki.ai/share/video/fliki-subtitles-demo-638dbcbd1229c8bb4435feb8',
  },
  {
    question: 'Can I translate my audio/video file into a different language?',
    answer:
      'Yes, Fliki supports the option to translate your file. \nTo translate any audio or video file, click on the “More” button and select the language you want to translate into. \nYou can preview and make further edits as required and export the file.',
  },
  {
    question: 'Can I add/ upload my own audio files?',
    answer:
      'Yes, absolutely! Fliki allows you to add or upload your own audio files. \nYou can add your preferred intro/ outro music. \nTo upload your own audio file, select the options icon, represented by three dots on the right side of the section or paragraph, and choose upload file from the listed options. \nSelect the desired audio file from your local storage or device, and proceed with the upload. \nYou must ensure that the file format is either MP3, as it is the only supported format. \nOnce the upload is complete, the audio file will be inserted as per your requirement.',
  },
  {
    question: 'How to track my usage or view my credits?',
    answer:
      'You can easily check your credits usage in the Accounts -> Credits section.\nhttps://app.fliki.ai/account',
  },
  {
    question: 'What are credits?',
    answer:
      'Credits are calculated as the duration in seconds or minutes that the audio or video is created per month. \nAudio credits are calculated each time a new or edited text is converted into audio.\nVideo credits are calculated on "Export" of the video.\nFliki offers 5 mins of credits per month under the free plan when you create an account. If you want to increase your credits do check out our subscription plans.\nCheck out the detailed explanation of credit usage here: https://fliki.ai/tutorials/credits',
  },
  {
    question: 'How to change my password?',
    answer:
      'You can change your password in 2 ways : \n1. Head to profile page and select the option to “Change Password”. \n2. Make sure you’re logged out and go to sign-in page, select “Continue with Email” and enter your email address. \nSelect forgot password option and follow the process to reset your password.',
  },
  {
    question: 'How to delete my account?',
    answer:
      'To delete your account email us at support@fliki.ai with your registered email address.',
  },
  {
    question: 'Do you offer a discount for nonprofits and educational institutes?',
    answer:
      'Yes, we offer a 15% discount for nonprofits and educational institutes. \nPlease reach out to us with your organization email address to get your discount code at support@fliki.ai.',
  },
  {
    question: 'How to apply a discount code?',
    answer:
      'Following these steps to apply a discount code:\nHead over to the account section, select “Subscribe to Fliki” \nSelect your subscription and click on “Make Payment” \nClick on “Add Promotion code”. \nEnter the coupon code, hit “Apply” and proceed with your payment.\n\nPlease note the discount code is only applicable for monthly subscriptions, as Yearly plans have a discount of 25% applied by default.',
  },
  {
    question: 'Does Fliki have a public roadmap?',
    answer:
      'Yeah, we do! You can check out our public roadmap here: https://fliki.ai/resources/roadmap',
  },
  {
    question: 'Can I change my email address?',
    answer:
      'Currently, we do not support email change directly through the accounts section, but please do reach out to us at support@fliki.ai to get it changed.',
  },
  {
    question: 'What happens if I run out of credits?',
    answer:
      'If you run out of credits before the end of the cycle/month. \nYou can always upgrade to subscription plans to get extra credits.\nOr contact us to reset your subscription and charge your account.',
  },
  {
    question: 'How to create videos and voiceovers using Fliki:',
    answer:
      "Now that you've started with Fliki, you can create videos and voiceovers in just a few steps.\nYou can add your script, select from 1000 voices, and choose from over 6 million images and clips.\nLearn more about how to create videos and voiceovers here: https://fliki.ai/resources#introduction",
  },
  {
    question: 'What languages does Fliki support?',
    answer:
      'Fliki supports more than 75 languages and over 100+ dialects: \n\nAfrikaans, Albanian, Amharic, Arabic, Armenian, Azerbaijani, Bangla/Bengali, Basque, Bosnian, Bulgarian, Burmese, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Filipino, Finnish, French, Galician, Georgian, German, Greek, Gujarati, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Irish, Italian, Japanese, Javanese, Kannada, Kazakh, Khmer, Korean, Lao, Latvian, Lithuanian, Macedonian, Malay, Malayalam, Maltese, Marathi, Mongolian, Nepali, Norwegian, Pashto, Persian, Polish, Portuguese, Punjabi, Romanian, Russian, Serbian, Sinhala, Slovak, Slovenian, Somali, Spanish, Sundanese, Swahili, Swedish, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Uzbek, Vietnamese, Welsh, Zulu\n\nYou can find the voice samples here: https://fliki.ai/resources/languages-and-dialects\nNot finding your language? Reach out to us at support@fliki.ai',
  },
  {
    question: 'How do I change the voice or language?',
    answer:
      'Click on the voice name in the section. \nUsually, the default voice is “Sara”. \nThis brings up a Voice selection popup. \nUse the “Language” dropdown to select your desired language.',
  },
  {
    question: 'How do I change or select a voice?',
    answer:
      'To change or select a voice follow these steps:\nClick the voice name in the section ("Sara"). \nThis brings up a Voice selection popup. \nYou can click on the speaker icon 🔉 to play sample audio from the voice. \nTo select the voice for a section click on the desired voice.',
  },
  {
    question: 'How to select emotions or Voice Styles',
    answer:
      'To express different emotions, select voice styles like Angry, Cheerful, Hopeful, etc . \nVoices that support voice styles are indicated with a ⚡️ icon.',
  },
  {
    question: 'How to create an Audio only file?',
    answer:
      'To create an audio only file follow these steps:\nSelect the Studio tab. \nChoose the Files option from the left-hand menu. \nClick on “+ New file” Enter the script name and select “Audio only” in the New file popup and hit Create. \nSelect the desired voice by clicking on the default voice name “Sara”. \nWrite, paste or import your script from the URL in the section. \nTo listen just to the section you can hover your mouse to the right of the section to find the play button. \nTo listen to your entire script content click the Play button in the bottom audio player.\n\nStep by step guide can be found here: https://fliki.ai/tutorials/voice-overs',
  },
  {
    question: 'How do I create a template or duplicate a file?',
    answer:
      'With Fliki you can create a template file with all your standard content. \nHere\'s how you can create a template:\nNavigate the folder where your template file is listed. \nClick on the "More" icon, represented by 3 dots, on the right side of the list item. \nSelect Duplicate and get a copy of your current file in the same folder. \nRename the copied file and start editing it.',
  },
  {
    question: 'How to add a section/ paragraph?',
    answer:
      'To add a new section click on the + (add) button right below the last script. \nAdd sections between other sections by clicking the + (add) button between two sections. \nSections can also be easily added by pressing the ↵ Enter key keeping the cursor on any existing section.',
  },
  {
    question: 'How can I remove a section/ paragraph?',
    answer:
      'Remove/ delete a section by clicking the menu options (3 dots) on the right side of the section. \nClick the Delete option and confirm.',
  },
  {
    question: 'Emphasize',
    answer:
      'Emphasize particular words by selecting/ highlighting text and selecting the Emphasize option. \nDe-emphasize by reselecting the same text and clicking Emphasize twice to remove the emphasis. \nNote: Not all voices support emphasize at this point. And for those voices, the emphasize button is not visible.',
  },
  {
    question: 'How to add a Pause?',
    answer:
      'Add pauses between words by selecting/ highlighting the space in between text and clicking Add Pause. \nEnter the duration to pause in seconds. \nTo remove the added pause you can just remove it from the section by using ← the backspace/delete key.\nhttps://fliki.ai/resources#pauses',
  },
  {
    question: 'How to change Pitch or Rate of the voice',
    answer:
      'Configure the pitch and rate of the resulting audio by selecting the desired text. \nSelect Tune option from the floating menu and then Pitch or Rate.\nThis will further bring up options like X-Low, Low, Medium, Fast, X-Fast or use the slider to configure it, \nselect the desired configuration and playback the section to listen to how it sounds.\nhttps://fliki.ai/resources#pitch-and-rate',
  },
  {
    question: 'How to slow down or speed up the voice?',
    answer:
      'Configure the pitch and rate of the resulting audio by selecting/highliting the desired text. \nSelect Tune option from the floating menu and then Pitch or Rate.\nThis will further bring up options like X-Low, Low, Medium, Fast, X-Fast or use the slider to configure it, \nselect the desired configuration and playback the section to listen to how it sounds.\nhttps://fliki.ai/resources#pitch-and-rate',
  },
  {
    question: 'Pronunciation Map',
    answer:
      'Fliki provides a pronunciation map/ dictionary, at every script level. \nEasily add custom pronunciation mapping to names and acronyms. \nClick on the 3 dots on the top right and select Pronunciation map option.',
  },
  {
    question: 'Import from Blog or URL',
    answer:
      'Fliki has a feature to import directly from your blog URL. \nGo to the file where you want to import. \nClick on “Convert” and select “Blog to Content”. \nEnter your blog article URL and hit “Submit”.\nhttps://fliki.ai/tutorials/blog-to-video',
  },
  {
    question: 'How to Translate?',
    answer:
      'Convert your finished audio/video into more than 75 languages. \nGo into the file you would like to translate, select “More” option and choose “Translate”. \nYou can select from over 75 languages to convert your video into in just 1 minute.',
  },
  {
    question: 'How to create Podcasts?',
    answer:
      'Create your podcast in 5 easy steps: \nStep 1 - Create a show Select Podcasts from the left panel and click on the + New show button. \nEnter the Podcast show details such as Title, Description, Category, Cover Image and hit Save. \nStep 2 - Create a new episode Select the newly created podcast from the list and click + New episode. \nEnter the episode details such as Title and Description and Cover image and hit Save. \nStep 3 - Create episode content Select the episode that was recently created from the list. \nSelect a narrator voice from the list of voices in your desired language and dialect. \nWrite or paste your content in the section. \nStep 4 - Preview Finally hit play to start producing the audio file and sit back and listen to your newly created podcast show. \nStep 5 - Share & Publish Now that you have a podcast show you can share it with others by finding the public link on the respective podcast page. \nYou can also publish the podcast on major stations like Spotify, Apple Podcasts, Google Podcasts and Amazon Podcasts using the RSS link.\nhttps://fliki.ai/tutorials/podcasts',
  },
  {
    question: 'How to create audiobooks?',
    answer:
      'Create your Audiobook in 5 easy steps: \nStep 1 - Create an audiobook Select Audiobooks from the left panel and click on the + New book button. \nEnter the book details such as Title, Author, Description, Cover Image and hit Save. \nStep 2 - Create a new chapter Select the newly created audiobook from the list and click + New Chapter. \nEnter the chapter Title and hit Save. \nStep 3 - Add chapter content Select the chapter that was recently created from the list. \nSelect a narrator voice from the list of voices in your desired language and dialect. \nWrite or paste your content in the section. \nStep 4 - Preview Finally hit play to start producing the audio file and sit back and listen to your newly created audiobook. \nStep 5 - Share Now that you have an audiobook you can share it with others by finding the public link on the respective audiobook page.\nhttps://fliki.ai/tutorials/audio-book',
  },
  {
    question: 'Tweet to Video',
    answer:
      'Turn your Tweet into a rich video with voiceover and share it with your users on TikTok, Instagram, and Youtube. \nStep 1: Create a video file \nStep 2: Click on Convert, and choose “Tweet to video” \nStep 3: Paste in your tweet link and hit submit. \nStep 4: Change the voice, card background color, text color, and placement by choosing “Video Settings”.\nhttps://fliki.ai/tutorials/tweet-to-video',
  },
  {
    question: 'Voice Cloning',
    answer:
      'Voice cloning allows users to create a computer-generated voice that sounds like their own voice. \n\nIt helps you to generate voiceovers using your own voice but do not have the time or resources to record your voice for every project. \nTo use this feature, subscribe to the Premium plan and navigate to the voice cloning section. \nEnter the voice name, and gender and record a consent script along with a sample script for about 2 mins. \n\nNote: Record the sample in a quiet environment without any background noise. \nRecord the sample in the tone you would like the voice to sound. \n\nTry using a high-quality microphone. \nAfter the consent recording, you can improvise the script to words you might regularly use in your voiceovers. \nCheck the “Make public” if you would like to give permission to other users on Fliki to use your voice in their workflow. \n\nThe AI voice generated will not have voice editing options like rate, pitch, pauses, or emphasis. \nThe voice cloning technology is useful for generating American English voices, as the software has been trained on a large dataset of American English speakers. \n\nOnce submitted it would take up to 6hrs for your voice to get approved and start using. \nCloned voices consume 2x the credits, i.e., 1 min of audio will deduct 2 mins of credits. \nhttps://fliki.ai/use-cases/voice-cloning',
  },
  {
    question: 'Idea to Video',
    answer:
      'The idea to video feature makes it easier to create a video script. \nYou need to  type in a few keywords about the script and select the language, tone, and length of the video and Fliki will create the entire video, including script, media, and background music.',
  },
  {
    question: 'How are credits calculated?',
    answer:
      "Here's how Fliki calculates credits:\nhttps://fliki.ai/tutorials/credits\n\nCredits charged per feature: \nAudio (per 1 minute): 1 credit \nVideo (per 1 minute): 1 credit AI Image (per 1 image) 1 credit \nAudio - Ultra realistic/Cloned voice (per 1 minute): 1 credit",
  },
  {
    question: 'Manage and Update Billing',
    answer:
      'Paid subscription members can change and update billing details. \nYou can access it from Account → Credits → Manage Billing and you will be able to update your company name, VAT and other details. \n\nWe use Stripe for processing payments and do not store your card details. \nTo compare the plans and learn more, you can check out the pricing page.',
  },
  {
    question: 'Team',
    answer:
      'Fliki offers team/company plans for easy management of billing. \nWhen you create a new team, you are added as the team administrator. \nYou can add team members who will use your plan. \nYour card is automatically charged when you add a new member. \nEach new seat follows same pricing and payment cycle as active on admin account. \nCredits will be shared across all the team members.',
  },
  {
    question: 'Rewards',
    answer:
      'Earn free credits by spreading word about Fliki! \nGet started by heading to the rewards section of the Account.',
  },
  {
    question: 'Copyright Claims',
    answer:
      'Find the details below\n\nHow to solve YouTube Content ID Claims\n\nPlease head over to your [profile](https://app.fliki.ai/account/profile) and enter your Youtube channel ID and hit “Update”. Reflecting and removing the claim from your video should take a few hours.\n\nHow to solve TikTok, Facebook Content ID Claims\n\nIn these cases, you must dispute the charge and claim the content is licensed through Storyblocks.',
  },
  {
    question: 'Can I cancel the subscription?',
    answer:
      'Yes, you can cancel your monthly subscription anytime you like. \nYou can simply head over to Account -> Manage Billing.\nIf you cancel you will still have access to your subscription plan until the end of your billing cycle.',
  },
  {
    question: 'Do you offer a trial of Premium plan?',
    answer:
      'We offer a Premium trial for the Enterprise plan which comes with a minimum of 5 users.\nPlease contact sales to know more details - sales@fliki.ai',
  },
  {
    question: 'How to remove the watermark?',
    answer:
      'You can easily remove the Fliki watermark by upgrading to the Standard or Premium subscription.\nThis also comes with the ability to download the videos in Full HD 1080p quality.',
  },
  {
    question: 'Can I create videos with Basic plan?',
    answer:
      'No, the basic plan comes with only audio creation.\nPlease subscribe to the Standard or Premium plan if you intend to create videos.',
  },
  {
    question: "I'm unable to access all the voices even after upgrading.",
    answer:
      'Hey, please note that the Ultra realistic voices (150 voices) marked with ⭐️ are only available on the Premium plan.\nThe rest of the 850 voices will be available on all other subscription plans.\nYou can easily upgrade your plan by heading to Account -> Manage Billing -> Update plan.',
  },
]
