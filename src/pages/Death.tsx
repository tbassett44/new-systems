import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Death = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Death and Dignity</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Honoring the natural cycles of life and death with dignity, meaning, and community support
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Abstract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Modern societies often deny or medicalize death, missing opportunities for meaning-making, 
            growth, and community connection. This paper explores frameworks for honoring death 
            and dying as natural parts of life, supporting dignified transitions, and creating 
            practices that help communities process grief and find meaning in loss.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Death is an inevitable part of life, yet modern societies often shy away from discussing it openly.
            In many cultures, death has become medicalized and institutionalized, removing it from the
            context of community and family. This paper aims to explore alternative approaches to death and
            dying that honor the natural cycles of life, provide dignity and meaning to the dying process, and
            offer support to individuals and communities as they navigate loss and grief.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historical and Cultural Perspectives on Death</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Throughout history and across cultures, death has been viewed and approached in diverse ways.
            Many indigenous cultures see death as a natural transition, a sacred journey, and an opportunity
            for spiritual growth. Rituals, ceremonies, and community involvement play a central role in
            honoring the deceased and supporting the grieving process.
          </p>
          <p>
            In contrast, Western societies have often adopted a more clinical and detached approach to death,
            focusing on medical interventions and prolonging life at all costs. This can lead to a sense of
            alienation and disconnection from the natural rhythms of life and death.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Medicalization of Death</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            The medicalization of death has transformed the dying process into a medical event, often taking
            place in hospitals or nursing homes under the care of medical professionals. While medical
            interventions can be valuable in managing pain and symptoms, they can also overshadow the
            emotional, spiritual, and social aspects of dying.
          </p>
          <p>
            Critics argue that the medicalization of death can lead to over-treatment, unnecessary suffering,
            and a loss of autonomy for the dying individual. It can also create a sense of distance and
            disconnection between the dying person and their loved ones.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alternative Approaches to Death and Dying</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            In response to the limitations of the medicalized approach to death, alternative models have
            emerged that prioritize holistic care, personal autonomy, and community involvement. These
            approaches include:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <b>Hospice Care:</b> Hospice provides compassionate care for individuals with terminal illnesses,
              focusing on pain management, emotional support, and spiritual guidance. Hospice care can take
              place in hospitals, nursing homes, or the individual's own home.
            </li>
            <li>
              <b>Palliative Care:</b> Palliative care aims to improve the quality of life for individuals with
              serious illnesses by addressing their physical, emotional, and spiritual needs. Palliative care
              can be provided at any stage of illness, not just at the end of life.
            </li>
            <li>
              <b>Home Funerals:</b> Home funerals allow families to care for their deceased loved ones at home,
              preparing the body, conducting memorial services, and handling burial or cremation arrangements
              themselves.
            </li>
            <li>
              <b>Death Doulas:</b> Death doulas provide emotional, spiritual, and practical support to dying
              individuals and their families, helping them navigate the end-of-life process with dignity and
              grace.
            </li>
            <li>
              <b>Green Burials:</b> Green burials minimize environmental impact by using biodegradable caskets,
              avoiding embalming, and burying the body in a natural setting.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The Role of Community in Death and Grief</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            In many traditional cultures, death is a community event, with family, friends, and neighbors
            coming together to support the dying person and their loved ones. Community involvement can
            provide emotional comfort, practical assistance, and a sense of shared purpose during a difficult
            time.
          </p>
          <p>
            In modern societies, community support for death and grief has often diminished, leaving individuals
            feeling isolated and alone. Rebuilding community connections and creating spaces for shared mourning
            can help individuals process grief and find meaning in loss.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Creating Meaning and Legacy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Death can be an opportunity to reflect on one's life, values, and contributions to the world.
            Creating a legacy can provide a sense of purpose and meaning, helping individuals feel that their
            lives have had a lasting impact.
          </p>
          <p>
            Legacy-building activities can include writing a memoir, creating a work of art, establishing a
            scholarship fund, or simply sharing stories and memories with loved ones.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <p>
            Death is an integral part of life, and by embracing it with openness, compassion, and community
            support, we can create more meaningful and dignified end-of-life experiences. By exploring
            alternative approaches to death and dying, we can reclaim our autonomy, honor the natural cycles
            of life, and find solace in the face of loss.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Death;
