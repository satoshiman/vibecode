import { Modal } from "@/components/ui/Modal";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms and Conditions">
      <div className="prose prose-slate max-w-none">
        <p className="text-muted-foreground mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using Vibe Code ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">2. Use License</h3>
          <p className="text-muted-foreground leading-relaxed">
            Permission is granted to temporarily access the materials (the "Materials") in Vibe Code for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on Vibe Code</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">3. Disclaimer</h3>
          <p className="text-muted-foreground leading-relaxed">
            The materials on Vibe Code are provided on an 'as is' basis. Vibe Code makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">4. Limitations</h3>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall Vibe Code or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vibe Code, even if Vibe Code or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">5. Privacy Policy</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your Privacy is important to us. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">6. Revisions and Errata</h3>
          <p className="text-muted-foreground leading-relaxed">
            The materials appearing on Vibe Code could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">7. Contact Information</h3>
          <p className="text-muted-foreground leading-relaxed">
            Questions about the Terms of Service should be sent to us at <a href="mailto:legal@vibecode.js.org" className="text-primary hover:underline">legal@vibecode.js.org</a>
          </p>
        </section>
      </div>
    </Modal>
  );
}
