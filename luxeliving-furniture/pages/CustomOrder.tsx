import React, { useState } from 'react';
import { Camera, Send, CheckCircle2, Upload, Trash2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const CustomOrder: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newPreviews = filesArray.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
      showToast(`${filesArray.length} image(s) uploaded`, 'success');
    }
  };

  const removeImage = (index: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      showToast('Custom order request sent!', 'success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (formSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center fade-in">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-stone-100">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-8"><CheckCircle2 className="w-12 h-12" /></div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Request Received!</h1>
          <p className="text-stone-600 text-lg mb-10 max-w-md mx-auto">Thank you! Our design experts will contact you within 24‑48 hours.</p>
          <button onClick={() => setFormSubmitted(false)} className="bg-emerald-800 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl">Submit Another Design</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-accent-100 text-brand-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Design Consultation</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">Bring Your <span className="italic text-brand-700">Unique</span> Vision to Life</h1>
          </div>
          <div className="space-y-8">
            <p className="text-stone-500 text-xl font-light">Share your ideas and our craftsmen will make them real.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 rounded-2xl border border-brand-100">
                <h4 className="font-bold text-brand-900 mb-1">1. Share Your Idea</h4>
                <p className="text-sm text-stone-500">Upload sketches or describe your vision.</p>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 p-6 rounded-2xl border border-accent-100">
                <h4 className="font-bold text-accent-900 mb-1">2. Initial Consult</h4>
                <p className="text-sm text-stone-500">We'll discuss materials and dimensions.</p>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 p-6 rounded-2xl border border-brand-100">
                <h4 className="font-bold text-brand-900 mb-1">3. Expert Crafted</h4>
                <p className="text-sm text-stone-500">Approved design moves to production.</p>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 p-6 rounded-2xl border border-accent-100">
                <h4 className="font-bold text-accent-900 mb-1">4. Final Delivery</h4>
                <p className="text-sm text-stone-500">Your masterpiece arrives assembled.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2"><label className="text-sm font-bold text-stone-700">Full Name</label><input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" /></div>
                <div className="space-y-2"><label className="text-sm font-bold text-stone-700">Phone Number</label><input required type="tel" placeholder="+1 234 567 890" className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" /></div>
              </div>
              <div className="space-y-2"><label className="text-sm font-bold text-stone-700">Email Address</label><input required type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" /></div>
              <div className="space-y-2"><label className="text-sm font-bold text-stone-700">Tell us about your project</label><textarea required rows={5} placeholder="Describe dimensions, materials, or the specific design..." className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"></textarea></div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-stone-700 block">Reference Images (Optional)</label>
                <div className="flex flex-wrap gap-4">
                  <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-stone-200 rounded-2xl cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 transition-all group"><Upload className="w-6 h-6 text-stone-400 group-hover:text-emerald-600 mb-1" /><span className="text-[10px] font-bold text-stone-400 group-hover:text-emerald-600">UPLOAD</span><input type="file" multiple className="hidden" onChange={handleFileChange} accept="image/*" /></label>
                  {previews.map((src, idx) => <div key={idx} className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md group"><img src={src} className="w-full h-full object-cover" /><button type="button" onClick={() => removeImage(idx)} className="absolute top-1 right-1 bg-white/90 p-1.5 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-3 h-3" /></button></div>)}
                </div>
                <p className="text-[10px] text-stone-400">JPG, PNG, WEBP allowed.</p>
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-emerald-800 text-white py-6 rounded-[2rem] font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl flex items-center justify-center gap-3 disabled:bg-stone-400">
                {isLoading ? <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-5 h-5" />Send Request</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;