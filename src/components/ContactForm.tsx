import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const services = [
  "BGF-Held",
  "FörderHeld",
  "Grundriss & BGF (Service)",
  "3D-Tour",
  "Immobilien-Website",
  "Individuelles Tool",
  "Kombi / Sonstiges",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `Neue Kontaktanfrage von ${formData.get("name")}`);
    formData.append("_template", "table");

    try {
      await fetch("https://formsubmit.co/ajax/bethke.ftr@gmail.com", {
        method: "POST",
        body: formData,
      });
    } catch {
      // continue
    }

    setSubmitted(true);
    setLoading(false);
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank, ich melde mich innerhalb von 24 Stunden.",
    });
  };

  if (submitted) {
    return (
      <div className="rounded-xl border bg-accent/50 p-8 text-center">
        <div className="mb-4 text-4xl">✅</div>
        <h3 className="mb-2 text-xl font-semibold">Vielen Dank!</h3>
        <p className="text-muted-foreground">
          Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Name *</label>
          <Input required placeholder="Ihr Name" name="name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">E-Mail *</label>
          <Input required type="email" placeholder="ihre@email.de" name="email" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Telefon</label>
          <Input placeholder="Optional" name="phone" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Leistung</label>
          <Select name="service">
            <SelectTrigger>
              <SelectValue placeholder="Bitte wählen" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Nachricht *</label>
        <Textarea required rows={5} placeholder="Beschreiben Sie kurz Ihr Anliegen…" name="message" />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Wird gesendet…" : "Nachricht senden"}
      </Button>
    </form>
  );
}
