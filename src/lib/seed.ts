import type { StudyPack } from '../types'
import { db, getMeta, setMeta } from './db'
import { importPack } from './packs'

// Two Italian sample packs (A2–B1 pitch) so first run is never empty.
// Both are marked is_sample and can be deleted from the Library.

export const SAMPLE_PACKS: StudyPack[] = [
  {
    pack_id: 'sample-cucinare-in-casa',
    meta: {
      title: 'Sempre più italiani tornano a cucinare in casa',
      source: 'Esempio · ANSA',
      url: '',
      date_published: '2026-06-08',
      date_processed: '2026-06-09',
      tags: ['società', 'cultura'],
      length_words: 90,
      level: 'B1',
    },
    summary_en:
      'More and more Italians are cooking at home to save money and eat better. Cooking shows and social media have made the habit popular again. Many families say cooking together brings them closer.',
    resumen_es:
      'Sempre più italiani tornano a cucinare a casa per risparmiare e mangiare meglio. I programmi di cucina e i social hanno reso di nuovo popolare questa abitudine. Molte famiglie dicono che cucinare insieme le unisce.',
    article_text:
      'Negli ultimi anni sempre più italiani tornano a cucinare a casa. Lo fanno per risparmiare, ma anche per mangiare in modo più sano. I programmi di cucina in televisione e i video sui social hanno reso di nuovo popolare questa abitudine. Inoltre, molte famiglie dicono che preparare la cena insieme le unisce. Soprattutto i giovani, che prima mangiavano spesso fuori, ora preferiscono fare la spesa e cucinare a casa.',
    vocab: [
      { id: 'cucinare', front: 'cucinare', pos: 'verb', back: 'to cook', example: 'Mi piace cucinare la pasta.', tier: 'B1', tags: ['cultura'] },
      { id: 'risparmiare', front: 'risparmiare', pos: 'verb', back: 'to save (money)', example: 'Cucinare a casa aiuta a risparmiare.', tier: 'B1', tags: ['società'] },
      { id: 'abitudine', front: 'abitudine', pos: 'noun', back: 'habit', example: 'Cucinare è una buona abitudine.', tier: 'B1', tags: ['società'] },
      { id: 'ricetta', front: 'ricetta', pos: 'noun', back: 'recipe', example: 'Questa ricetta è molto facile.', tier: 'B1', tags: ['cultura'] },
      { id: 'ingredienti', front: 'ingredienti', pos: 'noun', back: 'ingredients', example: 'Compro gli ingredienti al mercato.', tier: 'B1', tags: ['cultura'] },
      { id: 'sano', front: 'sano', pos: 'adj', back: 'healthy', example: 'Vogliono mangiare in modo sano.', tier: 'B1', tags: ['salute'] },
      { id: 'riunire', front: 'riunire', pos: 'verb', back: 'to bring together', example: 'Il cibo riunisce la famiglia.', tier: 'B2', tags: ['società'] },
      { id: 'di-nuovo', front: 'di nuovo', pos: 'phrase', back: 'again', example: 'Cucinano di nuovo a casa.', tier: 'B1', tags: ['conector'] },
      { id: 'inoltre', front: 'inoltre', pos: 'adv', back: 'moreover, besides', example: 'Inoltre, è più economico.', tier: 'B1', tags: ['conector'] },
      { id: 'soprattutto', front: 'soprattutto', pos: 'adv', back: 'above all, especially', example: 'Soprattutto i giovani cucinano di più.', tier: 'B1', tags: ['conector'] },
    ],
    grammar: [
      { sentence: 'Mi piace cucinare.', point: "the verb 'piacere' (to like)", explanation: "'piacere' works backwards: the thing liked is the subject and the person is an indirect object; 'mi piace' = 'it is pleasing to me'.", why_tricky: "English 'I like' makes the person the subject; Italian flips it." },
      { sentence: 'Sempre più italiani cucinano a casa.', point: "'sempre più' (more and more)", explanation: "'sempre più' + noun or adjective expresses an increasing amount ('more and more').", why_tricky: 'There is no single word for it in English; learners translate it literally.' },
      { sentence: 'Cucinare a casa aiuta a risparmiare.', point: "verb + 'a' + infinitive ('aiutare a')", explanation: "Some Italian verbs need 'a' before an infinitive: 'aiutare a', 'imparare a', 'cominciare a'.", why_tricky: "English uses 'to' or nothing; the required 'a' is easy to forget." },
    ],
    idioms: [
      { phrase: 'fare la spesa', meaning: 'to do the grocery shopping', example: 'Faccio la spesa il sabato mattina.' },
      { phrase: 'mettere le mani in pasta', meaning: 'to get hands-on / get involved', example: "Le piace cucinare e mettere le mani in pasta." },
    ],
    comprehension: [
      { q: 'Perché sempre più italiani cucinano a casa?', type: 'factual' },
      { q: 'Che cosa ha reso popolare di nuovo questa abitudine?', type: 'factual' },
      { q: 'Secondo te, cucinare insieme è importante per una famiglia?', type: 'opinion' },
    ],
    opinion_prompt: 'Ti piace cucinare? Perché sì o perché no? Scrivi ~80 parole.',
  },
  {
    pack_id: 'sample-parmitano-luna',
    meta: {
      title: "L'astronauta italiano Luca Parmitano andrà verso la Luna",
      source: 'Esempio · ANSA',
      url: '',
      date_published: '2026-06-09',
      date_processed: '2026-06-09',
      tags: ['scienza', 'spazio'],
      length_words: 80,
      level: 'B1',
    },
    summary_en:
      "Italian astronaut Luca Parmitano will join NASA's Artemis III mission toward the Moon. He will travel in Earth's orbit as part of the crew. The mission is planned for the second half of 2027.",
    resumen_es:
      "L'astronauta italiano Luca Parmitano farà parte della missione Artemis III verso la Luna. Viaggerà nell'orbita terrestre insieme all'equipaggio. La missione è prevista per la seconda metà del 2027.",
    article_text:
      "L'astronauta italiano Luca Parmitano farà parte della missione Artemis III, che aprirà la strada verso la Luna. Parmitano, dell'Agenzia Spaziale Europea, viaggerà nell'orbita terrestre insieme al resto dell'equipaggio. La missione è prevista per la seconda metà del 2027. Per l'Italia è una grande notizia e, grazie a questa missione, gli scienziati impareranno molte cose nuove.",
    vocab: [
      { id: 'astronauta', front: 'astronauta', pos: 'noun', back: 'astronaut', example: "L'astronauta si prepara per la missione.", tier: 'B1', tags: ['scienza'] },
      { id: 'missione', front: 'missione', pos: 'noun', back: 'mission', example: 'La missione è molto importante.', tier: 'B1', tags: ['scienza'] },
      { id: 'equipaggio', front: 'equipaggio', pos: 'noun', back: 'crew', example: "L'equipaggio è di quattro persone.", tier: 'B2', tags: ['scienza'] },
      { id: 'orbita', front: 'orbita', pos: 'noun', back: 'orbit', example: 'La nave entra in orbita.', tier: 'B1', tags: ['scienza'] },
      { id: 'spaziale', front: 'spaziale', pos: 'adj', back: 'space- (relating to space)', example: "L'Agenzia Spaziale Europea.", tier: 'B1', tags: ['scienza'] },
      { id: 'previsto', front: 'previsto', pos: 'adj', back: 'planned, expected', example: 'La partenza è prevista per il 2027.', tier: 'B1', tags: ['scienza'] },
      { id: 'viaggiare', front: 'viaggiare', pos: 'verb', back: 'to travel', example: 'Viaggerà verso la Luna.', tier: 'B1', tags: [] },
      { id: 'insieme-a', front: 'insieme a', pos: 'phrase', back: 'together with', example: 'Viaggia insieme agli altri.', tier: 'B1', tags: ['conector'] },
      { id: 'verso', front: 'verso', pos: 'prep', back: 'towards', example: 'Vanno verso la Luna.', tier: 'B1', tags: ['conector'] },
      { id: 'grazie-a', front: 'grazie a', pos: 'phrase', back: 'thanks to', example: 'Grazie alla missione, impareremo molto.', tier: 'B1', tags: ['conector'] },
    ],
    grammar: [
      { sentence: 'Parmitano farà parte della missione.', point: 'the simple future (futuro semplice)', explanation: "Italian forms the future with endings like -ò, -ai, -à, -emo, -ete, -anno ('farà' = he/she will do/make).", why_tricky: 'The endings are new and the stress falls on them, unlike the present tense.' },
      { sentence: 'La missione è prevista per il 2027.', point: "passive with 'essere' + past participle (agreeing)", explanation: "The passive uses 'essere' + past participle, and the participle agrees in gender/number ('prevista' for 'la missione').", why_tricky: 'English participles do not change form; Italian ones must agree.' },
      { sentence: "Viaggerà insieme all'equipaggio.", point: 'prepositions joined to articles (preposizioni articolate)', explanation: "Prepositions merge with the article: a + il = al, a + la = alla, a + lo/l' = allo/all'.", why_tricky: 'There are many combinations to memorise, and English keeps them separate.' },
    ],
    idioms: [
      { phrase: 'toccare il cielo con un dito', meaning: 'to be over the moon, on cloud nine', example: 'Quando lo seppe, toccava il cielo con un dito.' },
      { phrase: 'fare un passo avanti', meaning: 'to take a step forward', example: 'Con questa missione, la scienza fa un passo avanti.' },
    ],
    comprehension: [
      { q: 'Di quale missione farà parte Parmitano?', type: 'factual' },
      { q: 'Quando è prevista la missione?', type: 'factual' },
      { q: 'Perché è una notizia importante per l’Italia?', type: 'inferential' },
    ],
    opinion_prompt: 'Ti piacerebbe andare nello spazio? Perché? Scrivi ~80 parole.',
  },
]

/** Seed the two sample packs on first run only (never re-seeds after deletion). */
export async function seedIfEmpty(): Promise<boolean> {
  const seeded = await getMeta<boolean>('seeded', false)
  const count = await db.packs.count()
  if (seeded || count > 0) return false
  for (const p of SAMPLE_PACKS) await importPack(p, { is_sample: true })
  await setMeta('seeded', true)
  return true
}
