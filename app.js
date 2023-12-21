// Function to parse CSV data and create book catalog
function parseCSV(csv) {
    const lines = csv.split('\n');
    const catalog = [];

    for (let i = 1; i < lines.length; i++) {
        const [title, author, image] = lines[i].split(',');

        if (title && author && image) {
            catalog.push({ title, author, image });
        }
    }

    return catalog;
}

// Function to display book catalog
function displayCatalog(catalog) {
    const catalogContainer = document.getElementById('book-catalog');

    catalog.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const image = document.createElement('img');
        image.src = book.image;

        const title = document.createElement('p');
        title.classList.add('book-title');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.classList.add('book-author');
        author.textContent = book.author;

        bookDiv.appendChild(image);
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);

        catalogContainer.appendChild(bookDiv);
    });
}

// Sample CSV data (replace with your actual CSV data)
const csvData = `Title,Author,Image
Man and His Symbols	,	Jung C. G.
Fully Connected : Social Health in an Age of Overload (Reprint) [Paperback]	,	Hobsbawm Julia
Beyond Order	,	Jordan B Peterson
Collected Works of C.G. Jung Volume 16 : Practice of Psychotherapy (Bollingen Series) [Paperback]	,	Jung C. G. / Adler Gerhard (EDT) / Hull R. F.C. (EDT)
Psychotherapy East and West [Paperback]	,	Watts Alan
Collected Works of C.G. Jung Volume 6 : Psychological Types (Bollingen Series)	,	Jung C. G./ Adler Gerhard (EDT)/ Hull R. F.C. (EDT)
Hamka: Lembaga Hikmat (2023)	,	HAMKA
Hamka: Falsafah Hidup (2023)	,	HAMKA
Hamka: Lembaga Hidup (2023)	,	HAMKA
Hamka: Lembaga Budi (2023)	,	HAMKA
Hamka: Peribadi (2023)	,	HAMKA
Letters from a Stoic (Collins Classics) -- Paperback / softback [Paperback]	,	Lucius Seneca
Secrets of the Millionaire Mind (OME A) [Paperback]	,	Eker T. Harv
The Body Politic (Penguin Little Black Classics)	,	Jean-Jacques Rousseau
Anecdotes of the Cynics (Penguin Little Black Classics)	,	Diogenes
The Theory of the Leisure Class (Oxford World's Classics)	,	Thorstein Veblen 
On Liberty Utilitarianism and Other Essays (Oxford World's Classics)	,	John Stuart Mill
Blockchain : The Next Everything -- Hardback [Hardcover]	,	Williams Stephen P
The Intelligent Investor : A Book of Practical Counsel (Revised Subsequent) [Paperback]	,	Graham Benjamin / Zweig Jason
Money Master the Game : 7 Simple Steps to Financial Freedom -- Paperback / softback 	,	Tony Robbins
Saving Capitalism : For the Many Not the Few -- Paperback / softback	,	Reich Robert
Zero to One : Notes on Start Ups or How to Build the Future -- Paperback / softback	,	Thiel Peter / Masters Blake
Under New Management : How Leading Organisations Are Upending Business as Usual -- Paperback / softback	,	Burkus David
Crossing the Chasm : Marketing and Selling Disruptive Products to Mainstream Customers (3rd) [Paperback]	,	Moore Geoffrey A.
The Lean Startup : How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses	,	Ries Eric
The Undiscovered Self (Reissue) [Paperback]	,	Jung C. G. / Hull R. F. C. (TRN)
Creating Things That Matter: The Art and Science of Innovations That Last	,	David Edwards
The Luxury Strategy : Break the Rules of Marketing to Build Luxury Brands (2nd) [Hardcover]	,	Kapferer Jean-Noel / Bastien Vincent
The Personal MBA: A World-Class Business Education in a Single Volume	,	Kaufman Josh
Multi-hyphen Method : The Sunday Times business bestseller -- Paperback / softback	,	Gannon Emma
Meltdown : Why Our Systems Fail and What We Can Do about It -- Paperback / softback 	,	Clearfield Christopher / Tilcsik Andras
The 100 Best Business Books of All Time: What They Say Why They Matter and How They Can Help You	,	Jack Covert /  Todd Sattersten
The Leadership Gap: What Gets Between You and Your Greatness	,	Lolly Daskal
Drop the Ball: Achieving More by Doing Less	,	Tiffany Dufu 
Storyteller's Secret : How Ted Speakers and Inspirational Leaders Turn Their Passion into Performance -- Paperback	,	Gallo Carmine
Start With Why: The Inspiring Million-Copy Bestseller That Will Help You Find Your Purpose [Paperback]	,	Sinek Simon
Four Archetypes (Routledge Classics) (3RD) [Paperback]	,	Jung C.G.
Leaders Eat Last: Why Some Teams Pull Together and Others Don't [Paperback]	,	Sinek Simon
The Infinite Game: From the bestselling author of Start With Why [Paperback]	,	Sinek Simon
The Power of Agency: The 7 Principles to Conquer Obstacles Make Effective Decisions and Create a Life on Your Own Terms	,	Dr. Paul Napper / Anthony Rao Ph. D.
Get Better : 15 Proven Practices to Build Effective Relationships at Work -- Paperback / softback	,	Davis Todd
Back to Human : How Great Leaders Create Connection in the Age of Isolation [Hardcover]	,	Schawbel Dan
How to Win Friends and Influence People [Paperback]	,	Carnegie Dale
How to Stop Worrying and Start Living (Revised) [Paperback]	,	Carnegie Dale
Desire : Vintage Minis (Vintage Minis) -- Paperback / softback [Paperback]	,	Murakami Haruki
The Hero's Journey : Joseph Campbell on His Life and Work (The Collected Works of Joseph Campbell) (Reprint) [Paperback]	,	Campbell Joseph / Cousineau Phil (EDT) / Brown Stuart L. (FRW
What Every Body Is Saying : An Ex-FBI Agent's Guide to Speed- Reading People [Paperback]	,	Navarro Joe / Karlins Marvin
Aion : Researches into the Phenomenology of Self (Collected Works of C.g. Jung) <9> [Paperback]	,	 Jung C. G. / Adler Gerhard (EDT) / Hull R. F. C. (EDT)
There Is Never Anything but the Present : & Other Inspiring Words of Wisdom -- Hardback [Hardcover]	,	Watts Alan
Wisdom of Insecurity : A Message for an Age of Anxiety -- Paperback / softback [Paperback]	,	Watts Alan
Way of Zen -- Paperback / softback [Paperback]	,	Watts Alan 
The Book : On the Taboo against Knowing Who You Are (Reissue) [Paperback]	,	Watts Alan
Tao: the Watercourse Way -- Paperback / softback (Main) [Paperback]	,	Watts Alan
Just So : Money Materialism and the Ineffable Intelligent Universe [Paperback]	,	Watts Alan
Why I Am so Clever (Penguin Little Black Classics) [Paperback]	,	Nietzsche Friedrich / Hollingdale R. J. (TRN)
The Birth of Tragedy : Out of the Spirit of Music (Penguin Classics) [Paperback]	,	Nietzsche Friedrich Wilhelm / Tanner Michael (EDT)
Beyond Good and Evil (Reissue) [Paperback]	,	Nietzsche Friedrich Wilhelm / Hollingdale R. J.
The Will to Power (Penguin Classics) (Translation) [Paperback]	,	Nietzsche Friedrich Wilhelm / Hill R. Kevin (TRN) / Scarpitti
The Ego and the Id (Dover Thrift Editions) [Paperback]	,	Freud Sigmund
Psychology of Love (Penguin Modern Classics) -- Paperback / softback (English Language Edition) [Paperback]	,	Freud Sigmund
Civilization and Its Discontents (Penguin Modern Classics) -- Paperback / softback (English Language Edition) [Paperback]	,	Freud Sigmund
Unconscious (Penguin Modern Classics) -- Paperback / softback (English Language Edition) [Paperback]	,	Freud Sigmund
The Interpretation of Dreams (Oxford World's Classics) [Paperback]	,	Freud Sigmund / Robertson Ritchie (INT) / Crick Joyce (TRN)
The Language and Thought of the Child (Routledge Classics) (3rd Reprint) [Paperback]	,	Piaget Jean
How to Use Your Enemies (Penguin Little Black Classics) [Paperback]	,	Gracian Baltasar
Book of Tea (Penguin Little Black Classics) -- Paperback / softback [Paperback]	,	Okakura Kakuzo
Tao Te Ching (Penguin Classics) (Reprint) [Paperback]	,	Laozi / Lau D. C.
The Complete I Ching : The Definitive Translation by Taoist Master Alfred Huang (2nd Anniversary Translation) [Paperback]	,	Huang Alfred (TRN)
The Dhammapada [Paperback]	,	Roebuck Valerie J. (EDT)
12 Rules for Life : An Antidote to Chaos -- Paperback / softback [Paperback]	,	Peterson Jordan B.
The essence of Rumi [Paperback]	,	Baldock John
Memoirs of a Geisha	,	Arthur Golden
Silva Mind Control Method	,	Silva Jose
You the Healer : The World-Famous Silva Method on How to Heal Yourself and Others	,	Silva Jose / B. Stone Robert
Silva Ultramind Systems Persuasive Thoughts : Have More Confidence Charisma & Influence	,	Silva Jose / Katherine Sandusky /  Ed Bernd
Jose Silva's Everyday ESP : A New Way of Living	,	Jose Silva Jr /  Ed Bernd Jr
Riyadus Solihin	,	Imam Nawawi / AINON MOHD
Tafsir Al-Azhar Juzuk 30	,	HAMKA
The Book of Five Rings : A Classic Text on the Japanese Way of the Sword (Shambhala Library) [Paperback]	,	MIYAMOTO MUSASHI
Collected Works of C.G. Jung Volume 15 : Spirit in Man Art and Literature (Collected Works of C.G. Jung) [Paperback]	,	Jung C. G. / Adler Gerhard (EDT) / Hull R. F.C. (EDT)
Think Like a Psychologist : Get to Grips with the Workings of the Human Mind (Think Like Series) -- Paperback 	,	Rooney Anne
Charting the Economy: Early 20th Century Malaya and Contemporary Malaysian Contrasts [Hardcover]	,	Sultan Nazrin Shah
Why Nations Fail : The Origins of Power Prosperity and Poverty [Paperback]	,	Acemoglu Daron / Robinson James A.
Synchronicity : An Acausal Connecting Principle. (From Vol. 8. of the Collected Works of C. G. Jung) (Jung Extracts) [Paperback]	,	Jung C. G. / Shamdasani Sonu (FRW) / Shamdasani Sonu (FRW)
The Gateless Gate : The Classic Book of Zen Koans [Paperback]	,	Yamada Koun
My Inventions and Other Writings and Lectures (Thrift Editions) [Paperback]	,	Tesla Nikola
This is It : Essays on Zen and Spiritual Experience [Paperback]	,	Watts Alan
Collected Works of C.G. Jung Volume 5 : Symbols of Transformation (Bollingen Series) [Paperback]	,	Jung C. G. / Adler Gerhard (EDT) / Hull R. F.C. (EDT)
White Nights (Penguin Little Black Classics) -- Paperback	,	Dostoyevsky Fyodor
The Meek One (Penguin Little Black Classics) [Paperback]	,	Dostoyevsky Fyodor
How Much Land Does a Man Need? (Penguin Little Black Classics) [Paperback]	,	Leo Tolstoy
This Book Will Make You Think : Philosophical Quotes and What They Mean  [Paperback]	,	Stephen Alain
The Death of Ivan Ilyich (Penguin Little Black Classics) [Paperback]	,	Leo Tolstoy
A Confession and Other Religious Writings [Paperback]	,	Leo Tolstoy
Thus Spoke Zarathustra [Paperback]	,	Nietzsche Friedrich / Hollingdale R. J. (TRN)
War and Peace (Oxford World's Classics) [Paperback]	,	Tolstoy Leo / Mandelker Amy (INT) / Maude Louise and Aylmer (
A Billion Wicked Thoughts : What the Internet Tells Us About Sexual Relationships	,	Ogi Ogas
Collected Works of C.G. Jung Volume 17 : Development of Personality (Collected Works of C.G. Jung) [Paperback]	,	Jung C. G. / Adler Gerhard (EDT) / Hull R. F.C. (EDT)
Crisis Economics: A Crash Course in the Future of Finance	,	Nouriel Roubini & Stephen Mihm
Memories Dreams Reflections : An Autobiography [Paperback]	,	Carl Jung
Out of Your Mind : Tricksters Interdependence and the Cosmic Game of Hide-and-Seek [Paperback]	,	Watts Alan
The Way of Chuang Tzu (2ND) [Paperback]	,	Merton Thomas / Dalai Lama XIV (PRF)
Ego is the Enemy : The Fight to Master Our Greatest Opponent -- Paperback / softback (Main) [Paperback]	,	Holiday Ryan
Collected Works of C.G. Jung Volume 3: The Psychogenesis of Mental Disease (Collected Works of C. G. Jung) [Paperback]	,	Jung C.G. / Hull R.F.C. (TRN)
The Rubaiyat of Omar Khayyam (Dover Thrift Editions) [Paperback]	,	Edward Fitzgerald
Aphorisms on Love and Hate (Penguin Little Black Classics) [Paperback]	,	Nietzsche Friedrich
Lips too Chilled (Penguin Little Black Classics) [Paperback]	,	Matsuo Basho
Life of a Stupid Man (Penguin Little Black Classics) -- Paperback	,	 Akutagawa Ryunosuke
Nature Man and Woman [Paperback]	,	Watts Alan W
Find Your Why: A Practical Guide for Discovering Purpose for You and Your Team	,	Sinek Simon
Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!	,	Robert T. Kiyosaki
The Little Book of Valuation: How to Value a Company Pick a Stock and Profit	,	Damodaran Aswath
The Concise 48 Laws Of Power	,	Greene Robert
`;

// Parse CSV data and display the catalog
const catalog = parseCSV(csvData);
displayCatalog(catalog);
